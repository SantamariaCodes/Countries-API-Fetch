import React, { useState, useEffect, useMemo } from 'react';
import SearchBar from '../components/SearchBar';
import FilterByRegion from '../components/FilterByRegion';
import CountryCard from '../components/CountryCard';
import { getCountryData, searchCountry, filterCountriesByRegion, Country } from '../utils/api';
import Container from '../components/Container';

const defaultCountryCodes = ['DEU', 'JPN', 'USA', 'PRT', 'ESP', 'SLV'];

async function fetchCountries(): Promise<Country[]> {
  const countryData = await getCountryData(defaultCountryCodes);
  return countryData;
}

function Home() {
  const [countries, setCountries] = useState<Country[]>([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetchCountries().then((data) => {
      setCountries(data);
    });
  }, []);

  const handleSearch = async (value: string) => {
    setSearchTerm(value.trim());

    if (value.trim()) {
      const searchedCountries = await searchCountry(value.trim());
      setCountries(searchedCountries);
    } else {
      const countryData = await fetchCountries();
      setCountries(countryData);
    }
  };

  const handleFilter = async (region: string) => {
    const filteredCountries = await filterCountriesByRegion(region);
    setCountries(filteredCountries);
  };

  const memoizedCountryCards = useMemo(
    () =>
      countries.map((country, i) => <CountryCard key={i} country={country} />),
    [countries]
  );

  return (
    <Container>
      <div className="flex flex-col items-center">
        <div className="px-3 w-full flex flex-col md:flex-row justify-between mb-4 md:mb-0 mt-3 lg:mt-6">
          <SearchBar onSearch={handleSearch} className="mb-4 md:mb-0 md:w-2/5" />
          <FilterByRegion onFilter={handleFilter} className="md:w-1/5" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-2 lg:mt-10">
          {memoizedCountryCards.length > 0 ? (
            memoizedCountryCards
          ) : (
            <div>No country found</div>
          )}
        </div>
      </div>
    </Container>
  );
}

export default Home;

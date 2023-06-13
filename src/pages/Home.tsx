import React, { useState, useEffect } from 'react';
import SearchBar from '../components/SearchBar';
import FilterByRegion from '../components/FilterByRegion';
import CountryCard from '../components/CountryCard';
import { getCountryData, searchCountry, filterCountriesByRegion, Country } from '../utils/api';
import { useDebounce } from '../utils/useDebounce';


function Home() {
  const [countries, setCountries] = useState<Country[]>([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchCountries = async () => {
      const countryNames = ['Germany', 'Japan', 'United States of America', 'Portugal', 'Spain', 'El Salvador'];
      const countryData = await Promise.all(countryNames.map(getCountryData));
      setCountries(countryData);
    };

    fetchCountries();
  }, []);

  const handleSearch = async (value: string) => {
    setSearchTerm(value);
    if (value.trim()) {
      const searchedCountries = await searchCountry(value);
      setCountries(searchedCountries);
    } else {
      const countryData = await Promise.all(['Germany', 'Japan', 'United States of America', 'Portugal', 'Spain', 'El Salvador'].map(getCountryData));
      setCountries(countryData);
    }
  };

  const handleFilter = async (region: string) => {
    const filteredCountries = await filterCountriesByRegion(region);
    setCountries(filteredCountries);
  };
  
  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  useEffect(() => {
    if (debouncedSearchTerm) {
      const fetchCountry = async () => {
        const countryData = await searchCountry(debouncedSearchTerm);
        setCountries(countryData);
      };
  
      fetchCountry();
    }
  }, [debouncedSearchTerm]);
  return (
    <div className="flex flex-col items-center mx-5 md:mx-10">
      <div className="w-full flex flex-col md:flex-row justify-between mb-4 md:mb-0 mt-3 lg:mt-6">
        <SearchBar onSearch={handleSearch} className="mb-4 md:mb-0 md:w-2/5" />
        <FilterByRegion onFilter={handleFilter} className="md:w-1/5" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-2 lg:mt-10">
  {countries.length > 0 ? (
    countries.map((country, i) => <CountryCard key={i} country={country} />)
  ) : (
    <div>No country found</div>
  )}
</div>

    </div>
  );
}

export default Home;

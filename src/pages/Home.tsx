import React, { useState, useEffect } from 'react';
import SearchBar from '../components/SearchBar';
import FilterByRegion from '../components/FilterByRegion';
import CountryCard from '../components/CountryCard';
import { getCountryData, Country } from '../utils/api';

function Home() {
  const [countries, setCountries] = useState<Country[]>([]);
  const [searchTerm, setSearchTerm] = useState('');  // State to keep track of the search term

  useEffect(() => {
    const fetchCountries = async () => {
      const countryNames = ['United States of America', 'Germany', 'Japan'];
      const countryData = await Promise.all(countryNames.map(name => getCountryData(name)));
      setCountries(countryData);
    };

    fetchCountries();
  }, []);

  const handleSearch = (value: string) => {
    setSearchTerm(value);
  };

  const handleFilter = (region: string) => {
    console.log(region); // Replace this with your actual filter implementation
  };

  return (
    <div className="flex flex-col items-center mx-5 md:mx-10">
      <div className="w-full flex flex-col md:flex-row justify-between mb-4 md:mb-0">
        <SearchBar onSearch={handleSearch} className="mb-4 md:mb-0 md:w-2/5" />
        <FilterByRegion onFilter={handleFilter} className="md:w-1/5" />
      </div>
      <div className="grid grid-cols-1 gap-6">
        {countries
          .filter(country => country.name.toLowerCase().includes(searchTerm.toLowerCase()))
          .map((country, i) => (
          <CountryCard key={i} country={country} />
        ))}
      </div>
    </div>
  );
}

export default Home;

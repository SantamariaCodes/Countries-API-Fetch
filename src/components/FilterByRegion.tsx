import React from 'react';

interface FilterByRegionProps {
  onFilter: (region: string) => void;
  className?: string;
}

const FilterByRegion: React.FC<FilterByRegionProps> = ({ onFilter, className }) => {

  const handleFilterChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onFilter(event.target.value);
  };

  return (
    <select onChange={handleFilterChange} className={`px-3 py-2 text-gray-600 bg-white text-sm border-2 rounded border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-300 w-40 md:w-auto ${className}`}>
      <option value="">Filter by Region</option>
      <option value="Africa">Africa</option>
      <option value="Americas">Americas</option>
      <option value="Asia">Asia</option>
      <option value="Europe">Europe</option>
      <option value="Oceania">Oceania</option>
    </select>
  );
};

export default FilterByRegion;

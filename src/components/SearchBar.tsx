import React, { useState } from "react";

type SearchBarProps = {
  onSearch: (value: string) => void;
  className?: string;  // Add className prop here
};

const SearchBar: React.FC<SearchBarProps> = ({ onSearch, className }) => {
  const [searchTerm, setSearchTerm] = useState<string>("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
    onSearch(event.target.value);
  };

  return (
    <input
      type="search"
      placeholder="Search for a country..."
      value={searchTerm}
      onChange={handleInputChange}
      className={`px-3 py-2 placeholder-gray-500 text-gray-600 relative bg-white text-sm border-2 rounded border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-300 w-full md:w-auto ${className}`} // Use className here
    />
  );
};

export default SearchBar;

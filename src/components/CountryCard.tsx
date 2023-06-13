import React from 'react';
import { Country } from '../utils/api';  // Import the Country type from your api.ts file

interface CountryCardProps {
  country: Country;
}

const CountryCard: React.FC<CountryCardProps> = ({ country }) => {
  const { flag, name, population, region, capital } = country;

  return (
    <div className="border-2 rounded-md text-left overflow-hidden shadow-md max-w-[300px]">
      <div className="h-48 w-full overflow-hidden">
        <img src={flag} alt={name} className="w-full h-full object-cover"/>
      </div>
      <div className="p-4">
        <h2 className="font-bold text-xl mb-2">{name}</h2>
        <p><span className="font-semibold">Population: </span>{population.toLocaleString()}</p>
        <p><span className="font-semibold">Region: </span>{region}</p>
        <p><span className="font-semibold">Capital: </span>{capital}</p>
      </div>
    </div>
  );
};

export default CountryCard;

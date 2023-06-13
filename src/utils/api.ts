// utils/api.ts
export type Country = {
  flag: string;
  name: string;
  population: number;
  region: string;
  capital: string;
};

// Function to fetch data of a single country
export async function getCountryData(name: string): Promise<Country> {
  const response = await fetch(`https://restcountries.com/v3.1/name/${name}?fullText=true`);

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const countries = await response.json();
  const country = countries[0]; // the API returns an array, so we take the first element

  return {
    flag: country.flags.png,
    name: country.name.common,
    population: country.population,
    region: country.region,
    capital: country.capital[0], // capital is an array, so we take the first element
  };
}

// Function to fetch data of all countries
export async function getAllCountries(): Promise<Country[]> {
  const response = await fetch(`https://restcountries.com/v3.1/all`);

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const countries = await response.json();

  return countries.map((country: any) => ({
    flag: country.flags.png,
    name: country.name.common,
    population: country.population,
    region: country.region,
    capital: country.capital[0], // capital is an array, so we take the first element
  }));
}

// Function to search country by name
export async function searchCountry(name: string): Promise<Country[]> {
  const response = await fetch(`https://restcountries.com/v3.1/name/${name}`);

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const countries = await response.json();

  return countries.map((country: any) => ({
    flag: country.flags.png,
    name: country.name.common,
    population: country.population,
    region: country.region,
    capital: country.capital[0], // capital is an array, so we take the first element
  }));
}

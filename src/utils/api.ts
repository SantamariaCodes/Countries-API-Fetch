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
// utils/api.ts
// ...

export async function getAllCountries(): Promise<Country[]> {
  const response = await fetch(`https://restcountries.com/v3.1/all`);

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const countries = await response.json();

  return countries.map((country: any) => ({
    flag: country.flags?.png || '',
    name: country.name?.common || '',
    population: country.population || 0,
    region: country.region || '',
    capital: Array.isArray(country.capital) ? country.capital[0] : '', // Check if capital is an array before accessing it
  }));
}


// Function to search country by name
// In api.ts
export const searchCountry = async (name: string): Promise<Country[]> => {
  try {
    const response = await fetch(`https://restcountries.com/v3.1/name/${name}?fullText=true`);
    if (!response.ok) {
      console.error(`Network response was not ok. Status code: ${response.status}`);
      return [];
    }
    const countryData = await response.json();
    return countryData.map((country: any) => ({
      flag: country.flags.png,
      name: country.name.common,
      population: country.population,
      region: country.region,
      capital: country.capital[0],
    }));
  } catch (error) {
    console.error('Error:', error);
    return [];
  }
};
export const filterCountriesByRegion = async (region: string): Promise<Country[]> => {
  try {
    const response = await fetch(`https://restcountries.com/v3.1/region/${region}`);
    if (!response.ok) {
      console.error(`Network response was not ok. Status code: ${response.status}`);
      return [];
    }
    const countryData = await response.json();
    const filteredCountries = countryData.slice(0, 6);
    return filteredCountries.map((country: any) => ({
      flag: country.flags.png,
      name: country.name.common,
      population: country.population,
      region: country.region,
      capital: country.capital[0],
    }));
  } catch (error) {
    console.error('Error:', error);
    return [];
  }
};




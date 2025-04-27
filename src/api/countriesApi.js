import axios from 'axios'

const BASE_URL = 'https://restcountries.com/v3.1'

// Helper to add error handling
const createApiRequest = async (url) => {
  try {
    const response = await axios.get(url)
    return response
  } catch (error) {
    console.error(`API request failed for URL: ${url}`, error)
    throw error
  }
}

export const fetchAllCountries = async () => {
  return createApiRequest(`${BASE_URL}/all?fields=name,flags,region,population,capital,languages,cca3`)
}

export const fetchCountryByName = async (name) => {
  return createApiRequest(`${BASE_URL}/name/${name}?fields=name,flags,region,population,capital,languages,cca3,currencies,subregion`)
}

export const fetchByRegion = async (region) => {
  return createApiRequest(`${BASE_URL}/region/${region}?fields=name,flags,region,population,capital,languages,cca3`)
}

export const fetchCountryByCode = async (code) => {
  // Include all necessary fields for detailed view
  return createApiRequest(`${BASE_URL}/alpha/${code}?fields=name,flags,region,population,capital,languages,currencies,subregion`)
}
import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { fetchCountryByCode, fetchCountryByName } from '../api/countriesApi'
import './CountryDetail.css' // We'll create this CSS file

// Fallback data for countries that might not be in the API
const fallbackCountryData = {
  'SLE': {
    name: { common: 'Sierra Leone', official: 'Republic of Sierra Leone' },
    capital: ['Freetown'],
    region: 'Africa',
    subregion: 'Western Africa',
    population: 7976983,
    languages: { eng: 'English' },
    currencies: { SLL: { name: 'Sierra Leonean leone', symbol: 'Le' } },
    flags: {
      svg: 'https://flagcdn.com/sl.svg',
      alt: 'The flag of Sierra Leone is composed of three horizontal bands of green, white and blue.'
    }
  },
  'SGS': {
    name: { common: 'South Georgia and the South Sandwich Islands', official: 'South Georgia and the South Sandwich Islands' },
    capital: ['King Edward Point'],
    region: 'Antarctic',
    subregion: 'South Atlantic Ocean',
    population: 30,
    languages: { eng: 'English' },
    currencies: { GBP: { name: 'Pound sterling', symbol: '£' } },
    flags: {
      svg: 'https://flagcdn.com/gs.svg',
      alt: 'The flag of South Georgia and the South Sandwich Islands features the Union Jack in the top-left corner and the South Georgia and South Sandwich Islands coat of arms on the right side.'
    }
  }
}

function CountryDetail() {
  const { code } = useParams()
  const [country, setCountry] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  
  useEffect(() => {
    if (!code) {
      setLoading(false)
      setError("No country code provided")
      return
    }
    
    setLoading(true)
    setError(null)
    
    const fetchData = async () => {
      try {
        // First try the direct API call
        const response = await fetchCountryByCode(code)
        if (response.data && response.data.length > 0) {
          setCountry(response.data[0])
        } else {
          throw new Error(`No API data for code: ${code}`)
        }
      } catch (err) {
        console.error("Error fetching country:", err)
        
        // Check if we have fallback data
        if (fallbackCountryData[code]) {
          console.log(`Using fallback data for ${code}`)
          setCountry(fallbackCountryData[code])
        } else {
          // If no fallback, try by name as last resort
          try {
            const nameToTry = code === 'SLE' ? 'Sierra Leone' : code
            const nameResponse = await fetchCountryByName(nameToTry)
            if (nameResponse.data && nameResponse.data.length > 0) {
              setCountry(nameResponse.data[0])
            } else {
              setError(`No country data found for code: ${code}`)
            }
          } catch (nameErr) {
            setError(`Could not find country with code: ${code}`)
          }
        }
      } finally {
        setLoading(false)
      }
    }
    
    fetchData()
  }, [code])
  
  if (loading) {
    return (
      <div className="country-loading">
        <div className="spinner"></div>
        <p>Loading country information...</p>
      </div>
    )
  }
  
  if (error) {
    return (
      <div className="country-error">
        <div className="error-container">
          <h4>Country Not Found</h4>
          <p>{error}</p>
          <Link to="/" className="back-button">Back to Countries List</Link>
        </div>
      </div>
    )
  }
  
  if (!country) {
    return (
      <div className="country-error">
        <div className="error-container">
          <h4>No Data Available</h4>
          <p>Unable to retrieve country information.</p>
          <Link to="/" className="back-button">Back to Countries List</Link>
        </div>
      </div>
    )
  }
  
  return (
    <>
    <div className="country-detail " >
      <div className="country-card">
        <div className="country-grid">
          <div className="flag-container">
            {country.flags?.svg ? (
              <img 
                src={country.flags.svg} 
                alt={country.flags.alt || `Flag of ${country.name?.common || code}`} 
                className="country-flag"
              />
            ) : (
              <div className="no-flag">
                <p>No flag available</p>
              </div>
            )}
          </div>
          <div className="info-container">
            <h2>{country.name?.common || code}</h2>
            <div className="country-info">
              {country.capital?.length > 0 && (
                <p><strong>Capital:</strong> {country.capital.join(', ')}</p>
              )}
              {country.region && (
                <p><strong>Region:</strong> {country.region} {country.subregion ? `(${country.subregion})` : ''}</p>
              )}
              {country.population !== undefined && (
                <p><strong>Population:</strong> {country.population.toLocaleString()}</p>
              )}
              {country.languages && Object.keys(country.languages).length > 0 && (
                <p><strong>Languages:</strong> {Object.values(country.languages).join(', ')}</p>
              )}
              {country.currencies && Object.keys(country.currencies).length > 0 && (
                <p>
                  <strong>Currencies:</strong> {
                    Object.entries(country.currencies).map(([code, currency]) => (
                      `${currency.name} (${currency.symbol || code})`
                    )).join(', ')
                  }
                </p>
              )}
            </div>
            <Link to="/" className="back-button">Back to Countries List</Link>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default CountryDetail
import React, { useEffect, useState } from 'react'
import {
  fetchAllCountries,
  fetchCountryByName,
  fetchByRegion,
} from '../api/countriesApi'
import CountryCard from '../components/CountryCard'
import SearchBar from '../components/SearchBar'
import Filter from '../components/Filter'
import axios from 'axios'

function Home() {
  const [countries, setCountries] = useState([])
  const [loading, setLoading] = useState(false)

  const loadAllCountries = () => {
    setLoading(true)
    fetchAllCountries()
      .then((res) => setCountries(res.data))
      .catch((err) => console.error(err))
      .finally(() => setLoading(false))
  }

  useEffect(() => {
    loadAllCountries()
  }, [])

  const handleSearch = (query) => {
    if (!query) {
      loadAllCountries()
    } else {
      setLoading(true)
      fetchCountryByName(query)
        .then((res) => setCountries(res.data))
        .catch(() => setCountries([]))
        .finally(() => setLoading(false))
    }
  }

  const handleRegionChange = (region) => {
    if (!region) {
      loadAllCountries()
    } else {
      setLoading(true)
      fetchByRegion(region)
        .then((res) => setCountries(res.data))
        .catch(() => setCountries([]))
        .finally(() => setLoading(false))
    }
  }

  const handleLanguageChange = (lang) => {
    if (!lang) {
      loadAllCountries()
    } else {
      setLoading(true)
      axios
        .get(`https://restcountries.com/v3.1/lang/${lang}?fields=name,flags,region,population,capital,languages`)
        .then((res) => setCountries(res.data))
        .catch(() => setCountries([]))
        .finally(() => setLoading(false))
    }
  }

return (
    
    <div
        className="container mt-4"
        style={{
            minHeight: '50vh',
           
            backgroundColor:'black',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
        }}
    >
        <SearchBar onSearch={handleSearch} />
        <Filter onRegionChange={handleRegionChange} onLanguageChange={handleLanguageChange} />
        {loading && <p>Loading countries...</p>}
        <div className="row">
            {countries.map((country, i) => (
                <CountryCard key={i} country={country} />
            ))}
        </div>
    </div>
)
}

export default Home

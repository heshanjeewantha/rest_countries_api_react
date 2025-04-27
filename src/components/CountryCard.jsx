import React from 'react'
import { Link } from 'react-router-dom'

function CountryCard({ country }) {
  return (
    <div className="col-md-3 mb-4">
      <Link to={`/country/${country.cca3}`} style={{ textDecoration: 'none', color: 'inherit' }}>
        <div className="card h-100">
          <img src={country.flags.svg} className="card-img-top" alt={country.name.common} />
          <div className="card-body">
            <h5 className="card-title">{country.name.common}</h5>
            <p><strong>Capital:</strong> {country.capital?.[0]}</p>
            <p><strong>Region:</strong> {country.region}</p>
            <p><strong>Population:</strong> {country.population ? country.population.toLocaleString() : 'N/A'}</p>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default CountryCard

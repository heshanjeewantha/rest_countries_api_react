import React from 'react'

function Filter({ onRegionChange, onLanguageChange }) {
  const regions = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania']
  const languages = ['spanish', 'english', 'french', 'arabic', 'portuguese']

  return (
    <div className="row mb-4">
      <div className="col-md-6">
      <label htmlFor="region">Filter by Region</label>
        <select id="region" className="form-select" onChange={(e) => onRegionChange(e.target.value)}>
           <option value=""> select region</option>
          {regions.map((region) => (
            <option key={region} value={region.toLowerCase()}>{region}</option>
          ))}
        </select>
      </div>
      <div className="col-md-6">
       <label htmlFor="region">Filter by lanuage</label>
        <select className="form-select" onChange={(e) => onLanguageChange(e.target.value)}>
            <option value="">Select Language</option>
          {languages.map((lang) => (
            <option key={lang} value={lang.toLowerCase()}>{lang}</option>
          ))}
        </select>
      </div>
    </div>
  )
}

export default Filter

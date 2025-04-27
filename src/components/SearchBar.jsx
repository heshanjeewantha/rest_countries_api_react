import React from 'react'


function SearchBar({ onSearch }) {
return (
    <div className="input-group ">
        <input
            type="search"
            className="form-control "
            placeholder="Search countries by name..."
            aria-label="Search" aria-describedby="search-addon"
            onChange={(e) => onSearch(e.target.value)}
        />
        <button type="button" class="btn btn-primary" data-mdb-ripple-init>
               <p>Search</p>
         </button>
    </div>
);
}

export default SearchBar

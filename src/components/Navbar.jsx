import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Navbar() {
  const user = sessionStorage.getItem('user')
  const navigate = useNavigate()

  const handleLogout = () => {
    sessionStorage.removeItem('user')
    navigate('/login')
  }

  return (
    <nav className="navbar navbar-expand-lg bg-black  px-4">
      <Link className="navbar-brand d-inline p-2 bg-info text-white rounded" to="/">REST Countries</Link>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav ms-auto">
          {user ? (
            <>
              <li className="nav-item">
                <span className="navbar-text text-white me-3">Welcome, {user}</span>
              </li>
              <li className="nav-item">
                <button className="btn btn-outline-light btn-sm" onClick={handleLogout}>Logout</button>
              </li>
            </>
          ) : (
            <li className="nav-item text-white">
              <Link className="nav-link text-white" to="/login">Login</Link>
            </li>
          )}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar

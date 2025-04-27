import React, { useState } from 'react'


function Login() {
  const [username, setUsername] = useState('')

  const handleLogin = () => {
    sessionStorage.setItem('user', username)
    window.location.href = '/'
  }

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-12 col-sm-10 col-md-8 col-lg-6 col-xl-4">
          <div className="card shadow p-4">
            <h2 className="text-center mb-4">Login</h2>
            <input
              className="form-control mb-3"
              placeholder="Enter username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <button className="btn btn-primary w-100" onClick={handleLogin}>
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login

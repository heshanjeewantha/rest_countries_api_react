// Handle session-based auth
export const login = (username) => {
    sessionStorage.setItem('user', username)
  }
  
  export const logout = () => {
    sessionStorage.removeItem('user')
  }
  
  export const getUser = () => {
    return sessionStorage.getItem('user')
  }
  
  export const isAuthenticated = () => {
    return !!sessionStorage.getItem('user')
  }
  
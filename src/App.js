import React, { useState, useEffect } from 'react'
import Login from './components/Login'
import NavBar from './components/NavBar'

const App = (props) => {
  const [userLoggedIn, setUserLoggedIn] = useState(false)

  const handleAuth = () => {
    setUserLoggedIn(!userLoggedIn)
  }
  
  useEffect(() => {
    if(localStorage.getItem('token')){
      handleAuth()
    }
  },[])

  return (
    <div>
      <NavBar userLoggedIn={userLoggedIn} 
        handleAuth={handleAuth}  />
    </div>
  )
}

export default App
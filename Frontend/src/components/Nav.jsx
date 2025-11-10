import React from 'react'
import { Link } from 'react-router-dom'
const Nav = () => {
  return (
    <div>
      <Link to = "/">Login</Link>
      <Link to = "/">Home</Link>
      <Link to = "/users">user</Link>
      <Link to = "/courses">course</Link>
    </div>
  )
}

export default Nav

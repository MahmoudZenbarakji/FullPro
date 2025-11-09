import React from 'react'
import Link from "react-router-dom"
const Nav = () => {
  return (
    <div>
      <Link to = "/">Home</Link>
      <Link to = "./users">Home</Link>
      <Link to = "/courses">Home</Link>
    </div>
  )
}

export default Nav

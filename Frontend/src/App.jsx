import React from 'react'
import { Route , Routes } from 'react-router-dom'
import User from './dashboard/user'
import Course from './dashboard/course'
import Home from './dashboard/Home'
import Nav from './components/Nav'
import Login from './auth/login'
function App() {


  return (
    <>
    <Nav/>
        <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/users" element={<User />} />
        <Route path="/courses" element={<Course />} />
      </Routes>
    </>
  )
}

export default App

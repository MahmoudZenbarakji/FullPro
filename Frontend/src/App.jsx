import React from 'react'
import { Route , Routes } from 'react-router-dom'
import User from './dashboard/user'
import Course from './dashboard/course'
import Home from './dashboard/Home'
function App() {


  return (
    <>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<User />} />
        <Route path="/contact" element={<Course />} />
      </Routes>
    </>
  )
}

export default App

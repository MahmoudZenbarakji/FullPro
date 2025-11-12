import React from 'react'
import { Route , Routes } from 'react-router-dom'
import User from './dashboard/user'
import Course from './dashboard/course'
import Home from './Home'
import Nav from './components/Nav'
import Login from './auth/Login'
import CourseDetails from './courseDetails';
function App() {


  return (
    <>
    <Nav/>
        <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/users" element={<User />} />
        <Route path="/courses" element={<Course />} />
        <Route path="/course/:id" element={<CourseDetails />} />
      </Routes>
    </>
  )
}

export default App

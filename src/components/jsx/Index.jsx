import React from 'react'
import Amenities from './amenities'
import Courses from './Courses'
import Library from './library'
import Mentors from './Mentors'
import Shares from './shares'
import './style.css'
import { Route, Routes } from 'react-router-dom'
function Index() {
  return (
    <div>
        <Amenities />
        <Library />
        <Shares />
        <Courses />
        <Mentors />
    </div>
  )
}

export default Index
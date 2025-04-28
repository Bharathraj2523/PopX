import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Landingscreen from './Components/Landingscreen'
import Register from './Components/Register'
import Login from './Components/Login'
import Profile from './Components/Profile'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Landingscreen />} />
        <Route path='/register' element={<Register />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/profile' element={<Profile />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App

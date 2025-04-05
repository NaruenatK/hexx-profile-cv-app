//ในเชิง Production จะใช้กำหนด route
import React from 'react'
import { CssBaseline } from '@mui/material'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Profile from './views/Profile'
import Work from './views/Work'
import AboutMe from './views/AboutMe'
import Contact from './views/Contact'



function App() {
  return (
    <>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Profile />} />
          <Route path="/work" element={<Work />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
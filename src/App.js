import React from 'react'
import { Route, Routes } from 'react-router-dom';
import { Box } from '@mui/material';
import './App.css';
import ExcerciseDetail from './pages/ExcerciseDetail';
import Home from './pages/Home';
import Navbar from './components/Navbar'
import Footer from './components/Footer';

const App = () => {
  return (
    <Box width="400px" sx={{width: {xl: '1488'}}} m="auto">
    <Navbar />
    <Routes>
      <Route path = "/" element = {<Home />} />
      {/* Dynamically allocate excersie id*/}
      <Route path=" /excercise/:id" element={<ExcerciseDetail />}/>
    </Routes>
    <Footer />
    </Box>
  )
}

export default App

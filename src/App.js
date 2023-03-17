import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import AboutPage from './pages/AboutPage';
import DashBoardPage from './pages/DashBoardPage';
import LandingPage from './pages/LandingPage';
import SignInPage from './pages/SignInPage';
import SignUpPage from './pages/SignUpPage';


const  App = () => {
  return (
   <>   
   <Routes>
        <Route path="/" element={<LandingPage/>} />
        <Route path="/signup" element={<SignUpPage/>} />
        <Route path="/signin" element={<SignInPage/>} />
        <Route path="/about" element={<AboutPage/>} />
        <Route path="/dashboard" element={<DashBoardPage/>} />
   </Routes>
   </>

  );
}

export default App;


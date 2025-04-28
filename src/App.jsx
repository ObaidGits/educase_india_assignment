import React from 'react';
import './App.css';
import './Responsive.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Settings from './pages/Settings';

const App = () => {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/signup" element={<SignUp />}/>
        <Route path="/settings" element={<Settings />}/>
      </Routes>
    </Router>
    </>
  )

}

export default App
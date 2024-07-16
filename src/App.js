// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link, BrowserRouter } from 'react-router-dom';
import './App.css';
import Login from './Login';
import SignUp from './SignUp';

function App() {
  return (
    <div className="App">

    <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
    </BrowserRouter>
    </div>

  );
}

export default App;

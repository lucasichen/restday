
import logo from './logo.svg';
import './App.css';
import AppBar from './components/AppBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages'
import Trends from './pages/trends'
import Account from './pages/account'
import About from './pages/about'
import SignIn from './pages/signin'
import { Hello } from './components/hello'
import React from 'react';


function App() {
  return (
    <Router>
      <AppBar />
      < Hello />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/trends" element={<Trends />} />
        <Route path="/account" element={<Account />} />
        <Route path="/about" element={<About />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/workout-schedule">
                {/* <WorkoutSchedule /> */}
        </Route>
      </Routes>
    </Router>
    
  );

  }
export default App;

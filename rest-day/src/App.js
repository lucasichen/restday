import "./App.css";
import AppBar from "./components/AppBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/HomePage/HomePage";
import Trends from "./pages/trends";
import Account from "./pages/account";
import About from "./pages/about";
import SignIn from "./pages/signin";
import WorkoutSchedule from "./components/WorkoutSchedule/WorkoutSchedule";
import React from 'react'

function App() {
    return (
        <div className="App">
            <AppBar />
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/trends" element={<Trends />} />
                <Route path="/account" element={<Account />} />
                <Route path="/about" element={<About />} />
                <Route path="/signin" element={<SignIn />} />
                <Route path="/workout-schedule" element={<WorkoutSchedule />} />
            </Routes>
        </div>
    );
}
export default App;

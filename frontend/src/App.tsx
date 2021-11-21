import React from 'react';
import {BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import {Nav} from "./components/Nav";
import LandingPage from "./pages/LandingPage";
import MoviesPage from "./pages/MoviesPage";

function App() {
  return (
    <div className="App">
      <Nav/>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage/>}/>
          <Route path="/movies" element={<MoviesPage/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

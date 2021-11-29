import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css';
import {Nav} from "./components/Nav";
import LandingPage from "./pages/LandingPage";
import MoviesPage from "./pages/MoviesPage";
import ErrorPage from "./pages/ErrorPage";
import {QueryClientProvider} from "react-query";
import {ReactQueryDevtools} from "react-query/devtools";
import {queryClient} from "./config/queryClient";


function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <Router>
          <Nav/>
          <Routes>
            <Route path="/" element={<LandingPage/>}/>
            <Route path="/movies" element={<MoviesPage/>}/>
            <Route path="*" element={<ErrorPage/>}/>
          </Routes>
        </Router>
        <ReactQueryDevtools initialIsOpen={false}/>
      </div>
    </QueryClientProvider>
  );
}

export default App;

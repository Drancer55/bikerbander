import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './NavBar/NavBar';
import LandingPage from './LandingPage/LandingPage';

import { Routes, Route, Navigate } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <NavBar />
      <LandingPage/>
    </div>
  );
}

export default App;

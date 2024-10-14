import logo from './logo.svg';
import React from "react";
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import Homepage from './Components/Homepage/Homepage';
import TicTacToe from './Components/TicTacToe/TicTacToe';
import SzabiCV from './Components/CVs/SzabiCV';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import VinceCV from './Components/CVs/VinceCV';
import AlmiCV from './Components/CVs/AlmiCV';


function App() {
  return (
    <>
      <Navbar/>
      <Footer/>
      <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Homepage />} />
        <Route path="/almi" element={<AlmiCV />} />
        <Route path="/vince" element={<VinceCV />} />
        <Route path="/szabi" element={<SzabiCV />} />
        <Route path="*" element={<Homepage />} />
      </Routes>
      </BrowserRouter>
    </>

  );
}

export default App;

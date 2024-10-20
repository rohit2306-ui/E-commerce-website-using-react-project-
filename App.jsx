import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./Components/Navbar";
import Poster from "./Components/Poster";
import Data from "./Components/Data";
import Brand from "./Components/Brand";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./Components/About";
import Categories from "./Components/Categories";
import Filter from "./Components/Filter";
import Home from "./Components/Home";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/filter" element={<Filter />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

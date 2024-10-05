import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./Components/Navbar";
import Poster from "./Components/Poster";
import Data from "./Components/Data";
import Brand from "./Components/Brand";


function App() {
  return (
    <>
      <Navbar />
      <Poster/>
      <Data/>
    </>
  );
}

export default App;

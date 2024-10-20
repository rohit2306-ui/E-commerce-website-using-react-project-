import React from "react";
import Search from "../img/Search.png";
import Cart from "../img/Cart.jpg";
import {Link } from "react-router-dom";
// import Poster from './Poster'

function Navbar() {
  let my_search = document.querySelector(".search");
  let cartthis = document.querySelector('.cart-this');
  const search = () => {
    my_search.classList.toggle("active");
  };
  const cart = () => {
    cartthis.classList.toggle("active");
  };
  
  return (
    <>
      <nav className="navbar">
        <div>
          <Link to="/">Home</Link>
          <Link to="/about">About us</Link>
          <Link to="/categories">Prodeuts</Link>
          {/* <Link to="/filter">Filter</Link> */}
          {/* <div className="cart-this"></div> */}
        </div>
        <h1>R</h1>
        <h2>SHOP</h2>
        <img src={Search} alt="" id="Search" onClick={search} />
        <img src={Cart} alt="" id="cart" onClick={cart}/>
      </nav>
    </>
  );
}


export default Navbar;

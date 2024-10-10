import React from "react";
import Search from "../img/Search.png";
import Cart from "../img/Cart.jpg";
import {Link } from "react-router-dom";
// import Poster from './Poster'

function Navbar() {
  let my_cart = document.querySelector(".carts");
  const cart = () => {
    my_cart.classList.toggle("active");
  };
  let my_search = document.querySelector(".search");
  const search = () => {
    my_seLinkrch.classList.toggle("active");
  };
  return (
    <>
      <nav className="navbar">
        <div>
          <Link to="/">Home</Link>
          <Link to="/about">About us</Link>
          <Link to="/categories">Categories</Link>
          <Link to="/filter">Filter</Link>
        </div>
        <h1>R</h1>
        <h2>SHOP</h2>
        <img src={Search} alt="" id="Search" onClick={search} />
        <img src={Cart} alt="" id="cart" onClick={cart} />
      </nav>
    </>
  );
}

export default Navbar;

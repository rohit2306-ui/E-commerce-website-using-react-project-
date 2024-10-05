import React from "react";
import Search from "../img/Search.png";
import Cart from "../img/Cart.jpg";
// import Poster from './Poster'

function Navbar() {
  let my_cart = document.querySelector(".carts");
  const cart = () => {
    my_cart.classList.toggle("active");
  };
  let my_search = document.querySelector(".search");
  const search = () => {
    my_search.classList.toggle("active");
  };
  return (
    <>
      <nav className="navbar">
        <div>
          <a href="/Data.jsx">About us</a>
          <a href="">Categories</a>
          <a href="">Filter</a>
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

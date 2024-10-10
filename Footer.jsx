import React from 'react'
import insta from '../img/instaicon.png'
import linkd from '../img/linkdinicon.png'
import send from "../img/sendicon.jpg"
import world from "../img/worldicon.png"

function Footer() {
  return (
    <>
    <div className="footer">
      <div className="about">
        <h1>
          Contact us
        </h1>
        <div className='email-send'>
          <input type="text" placeholder='Send us'/>
          <img src={send} alt="" />
        </div>
        <div className="socl">
          <img src={insta} alt="" />
          <img src={linkd} alt="" />
        </div>
        <div className="creator">
            <h3>creator:@rohit thakur</h3>
            <h3>2024 present's</h3>
        </div>
      </div>
      <div className="Links">
        <div>
        <a href="">liks</a>
        <a href="">liks</a>
        <a href="">liks</a>
        <a href="">liks</a>
        <a href="">liks</a>
        <a href="">liks</a>
        <a href="">liks</a>
        </div>
        <div className="avail">
          <h1>Available</h1>
          <h3>counries</h3>
          <h3>counries</h3>
          <h3>counries</h3>
          <h3>counries</h3>
          <h3>counries</h3>
          <h3>counries</h3>
        </div>
      </div>
      <div className="social">
      <img src={world} alt="" />
      <div>
      <h1>R</h1>
      <h2>Shop</h2>
      </div>
      </div>
    </div>
    </>
  )
}

export default Footer
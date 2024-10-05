import React, { Component } from "react";
import Data from "./Data";
import Brand from "./Brand";

export class Poster extends Component {
  render() {
    return (
      <>
        <div className="main">
        <div className="poster-img">
          <div className="search">
            <input type="text" placeholder="Seacrh" name="" id="" />
          </div>
          <div className="search-text"></div>
          <h1 className="Gift">GIFT'S GUIDE</h1>
          <h1 className="enjoy">Enjoy the Trend</h1>
          <button className="but">Shop gifts</button>
        </div>
        {/* <Data/> */}
        <Brand/>
        <Data/>
        </div>
        
      </>
    );
  }
}

export default Poster;

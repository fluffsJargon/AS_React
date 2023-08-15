import React from "react";
import { logo } from '../assets/pastaLogo.png';

export const Header = () => {
    return ( 
      <div id="header" className="header">
          <img className="logo" src={logo}></img>  
          <div className="rightItems">
              <ul>
              <li>Home</li>
              <li>About</li>
              <li>Cart</li>
              </ul>
          </div>
      </div>
    );
  };
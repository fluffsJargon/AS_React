import { Link } from "react-router-dom";
import React from "react";
import useOnlineStatus from "../utils/useOnlineStatus";
import { logo } from "../assets/pastaLogo.png";


export const Header = () => {
  const status = useOnlineStatus();
  return (
    <div id="header" className="flex justify-between px-2 border border-solid border-black bg-gray-200 shadow-lg sm:bg-yellow-50 lg:bg-green-50">
      <img className="logo w-56 p-2" src={logo}></img>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-4">Online Status: {status ? "✅" : "❌"}</li>
          <li className="px-4">
            <Link to="/grocery">Grocery</Link>
          </li >
          <li className="px-4">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link to="/about">About</Link>
          </li>
          <li className="px-4">
            <Link to="/contact">Contact Us</Link>
          </li>
          
        </ul>
      </div>
    </div>
  );
};

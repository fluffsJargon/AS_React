import { Link } from "react-router-dom";
import React, { useContext, useState } from "react";
import useOnlineStatus from "../utils/useOnlineStatus";
import { logo } from "../assets/pastaLogo.png";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

export const Header = () => {
  const status = useOnlineStatus();
  const user = useContext(UserContext);
  const [loginStatus, setLoginStatus] = useState('Login');

  // selector is a hook inside react - we are subscribing to the store by using selector
  const cartItems = useSelector((store) => store.cart.items)

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
          <li className="px-4">
            {user.loggedInUser}
          </li>
          <li className="px-4 font-bold">
           <Link to="/cart">Cart ({cartItems.length} items)</Link> 
          </li>
          <li className="px-4 font-bold">
           <button onClick={()=> setLoginStatus('Logout')}>{loginStatus}</button>
          </li>
          
        </ul>
      </div>
    </div>
  );
};

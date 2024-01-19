import React, { useContext } from "react";
import RestCard, { withPromotedLabel } from "./RestCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { REST_URL } from "../utils/constants";
import UserContext from "../utils/UserContext";
import * as resList from './mocks/mockResListData.json'
import BaseButton from "./common/BaseButton";

// Normal JS variable
// let restList = swiggyData.restaurants;
type resList = {
 info : {
  name : string
 }
}
type restaurant = {
  info : {
    id:string,
    avgRating:number
  }
}

export const Body = () => {
  //Local state variable by react
  const [listOfRest, setListOfRest] = useState([]);
  const [inputVal, setInputVal] = useState("");
  const [filteredListOfRest, setFilteredListOfRest] = useState([]);

  const RestCardPromoted = withPromotedLabel(RestCard);
  const {loggedInUser, setUserName} = useContext(UserContext);
  const {theme, setThemeValue} = useContext(UserContext);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    // const data = await fetch(
    //   REST_URL
    // );
    // const json = await data.json();
    // //Optional chaining
    // const newList =
    //   json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
    //     ?.restaurants;
    const newList = (resList)?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    console.log(newList)
    setListOfRest(newList as []);
    setFilteredListOfRest(newList as []);
  };

  const onlineStatus = useOnlineStatus();
  if (onlineStatus == false)
    return (
      <h3>Looks like you are offline!! Please check ur shitty connection!</h3>
    );
  //Conditional rendering

  return listOfRest.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body back">
      <div className="filter">
        <div className="flex">
          <input
            value={inputVal}
            data-testid="search-input"
            className=" border-black border w-40 px-4 mx-2"
            onChange={(e) => {
              setInputVal(e.target.value);
            }}
          />
          <BaseButton
            buttonLabel="Search"
            onClick={() => {
              const filteredList = listOfRest.filter((res: resList) =>
                res?.info?.name.toLowerCase().includes(inputVal.toLowerCase())
              );
              setFilteredListOfRest(filteredList);
            }}
          />
            <label className='mx-4'>Username: </label>
          <input
            value={loggedInUser}
            className=" border-black border w-40 px-2"
            onChange={(e) => {
              setUserName(e.target.value);

            }}
          />
          <div className="mx-4 "><BaseButton
            buttonLabel="Change Theme"
            onClick={() => {
              theme === 'light'? 
              setThemeValue('dark'): setThemeValue('light');
              
            }}
          /></div>
          
        </div>
        {/* <button
          className="filter-btn"
          onClick={() => {
            const filteredRatingList = listOfRest.filter(
              (res) => res.info.avgRating > 4.2
            );
            setFilteredListOfRest(filteredRatingList);

          }}
        >
          Top rated restaraunt
        </button> */}
      </div>
      <div className="flex flex-wrap">
        {filteredListOfRest.map((restaurant:restaurant) => (
          <Link
            className=""
            key={restaurant.info.id}
            to={"./restarauntMenu/" + restaurant.info.id}
          >
            {restaurant.info.avgRating>4.3 ? <RestCardPromoted resData={restaurant} /> : <RestCard resData={restaurant} />}
          </Link>
        ))}
      </div>
    </div>
  );
};

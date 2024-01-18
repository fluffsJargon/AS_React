import React, { useContext } from "react";
import RestCard, { withPromotedLabel } from "./RestCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { REST_URL } from "../utils/constants";
import UserContext from "../utils/UserContext";
import * as resList from './mocks/mockResListData.json'

// Normal JS variable
// let restList = swiggyData.restaurants;

export const Body = () => {
  //Local state variable by react
  const [listOfRest, setListOfRest] = useState([]);
  const [inputVal, setInputVal] = useState("");
  const [filteredListOfRest, setFilteredListOfRest] = useState([]);

  const RestCardPromoted = withPromotedLabel(RestCard);
  const {loggedInUser, setUserName} = useContext(UserContext);

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
    setListOfRest(newList);
    setFilteredListOfRest(newList);
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
    <div className="body">
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
          <button
            className=" border-black border w-20 bg-green-50 rounded-lg"
            onClick={() => {
              const filteredList = listOfRest.filter((res) =>
                res.info.name.toLowerCase().includes(inputVal.toLowerCase())
              );
              setFilteredListOfRest(filteredList);
            }}
          >
            Search
          </button>

            <label className='mx-4'>Username: </label>
          <input
            value={loggedInUser}
            className=" border-black border w-40 px-2"
            onChange={(e) => {
              setUserName(e.target.value);

            }}
          />
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
        {filteredListOfRest.map((restaurant) => (
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

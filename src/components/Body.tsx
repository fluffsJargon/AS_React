import React from "react";
import RestCard from "./RestCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

// Normal JS variable
// let restList = swiggyData.restaurants;

export const Body = () => {
  //Local state variable by react
  const [listOfRest, setListOfRest] = useState([]);
  const [inputVal, setInputVal] = useState("");
  const [filteredListOfRest, setFilteredListOfRest] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9121181&lng=77.6445548&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    //Optional chaining
    const newList =
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;

    setListOfRest(newList);
    setFilteredListOfRest(newList)
  };

  //Conditional rendering

  return listOfRest.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search-box">
          <input
            value={inputVal}
            onChange={(e) => {
              setInputVal(e.target.value);
            }}
          />
          <button
            onClick={() => {
              console.log("listOfRest" + listOfRest);

              const filteredList = listOfRest.filter((res) =>
                res.info.name.toLowerCase().includes(inputVal.toLowerCase())
              );
              console.log("filteredList" + filteredList);

              setFilteredListOfRest(filteredList);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filteredRatingList = listOfRest.filter(
              (res) => res.info.avgRating > 4.2
            );
            setFilteredListOfRest(filteredRatingList);

          }}
        >
          Top rated restaraunt
        </button>
      </div>
      <div className="res-container">
        {filteredListOfRest.map((restaurant) => (
          <RestCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

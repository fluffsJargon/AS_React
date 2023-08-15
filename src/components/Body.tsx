import React from "react";
import swiggyData from '../utils/swiggy_mock.json';
import RestCard from "./RestCard";

const SearchBar = () => {
    return (
    <div className="search">Search</div>
    )
}

export const Body = () => {
    return (
        <div className="body">
            <SearchBar />
            <div className="res-container">
                {
                    swiggyData.restaurants.map(restaurant => <RestCard resData={restaurant} />)
                }
            </div>
        </div>
    )
    }
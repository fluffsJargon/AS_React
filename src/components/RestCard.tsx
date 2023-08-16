import React from "react";
import { CDN_URL } from "../utils/constants";

export default function RestCard({resData}) {
  const { cloudinaryImageId, name, cuisines, avgRatingString } = resData?.info;

  return (
    <div className="res-card">
      <img
        className="res-image"
        src={
            CDN_URL +
          cloudinaryImageId
        }
      ></img>
      <h3>{name}</h3>
      <h5>{cuisines.join(", ")}</h5>
      <h5>{avgRatingString} stars</h5>
    </div>
  );
}

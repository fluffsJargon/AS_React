import React from "react";
import { CDN_URL } from "../utils/constants";

export default function RestCard({resData}) {
  const { cloudinaryImageId, name, cuisines, avgRatingString } = resData?.info;

  return (
    <div className="h-[400px] w-[250px] m-2 p-2  bg-gray-100 rounded-lg hover:bg-gray-200">
      <img
        className="w-[250] h-[250] rounded-md"
        src={
            CDN_URL +
          cloudinaryImageId
        }
      ></img>
      <h3 className='font-bold p-2'>{name}</h3>
      <h5 className=' p-2'>{cuisines.join(", ")}</h5>
      <h5 className='font-bold p-2'>{avgRatingString} stars</h5>
    </div>
  );
}

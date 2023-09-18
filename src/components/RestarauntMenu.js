import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestarauntMenu from "../utils/useRestarauntMenu";
import RestCategory from "./RestCategory";

export default function RestarauntMenu() {
  const { resId } = useParams();
  const [showIndex, setShowIndex] = useState(null);

  const resInfo = useRestarauntMenu(resId);
  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[0]?.card?.card?.info;

  const { itemCards } =
  resInfo?.cards[2]?.groupedCard?.cardGroupMap.REGULAR?.cards[1]?.card?.card;

  const category = resInfo?.cards[2]?.groupedCard?.cardGroupMap.REGULAR?.cards.filter(c => c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
  console.log(resInfo?.cards[2]?.groupedCard?.cardGroupMap.REGULAR?.cards[1]?.card?.card);
  return (
    <div className="text-center ">
      <h1 className="font-bold my-4 text-2xl">{name}</h1>
      <p className="font-bold m text-lg">
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>
      {category.map( (category, index) => (<RestCategory key={category.card.card.title} data={category.card.card} showItems={(index === showIndex)?true:false}
      setShowIndex={()=>setShowIndex(index)}/> ) )}
    </div>
  );
}

import React from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestarauntMenu from "../utils/useRestarauntMenu";

export default function RestarauntMenu() {
  const { resId } = useParams();

  const resInfo = useRestarauntMenu(resId);
  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[0]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap.REGULAR?.cards[1]?.card?.card;
  console.log(itemCards);
  return (
    <div className="menu">
      <h1>{name}</h1>
      <p>
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>
      <h3>Menu</h3>
      <ul>
        {itemCards.map((item) => (
          <li>
            {item.card.info.name} - {" Rs "}
            {item.card.info.price / 100}
          </li>
        ))}
      </ul>
    </div>
  );
}

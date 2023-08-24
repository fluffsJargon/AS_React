import React, { useState } from "react";
import MenuItemList from "./MenuItemList";

export default function RestCategory({ data , showItems , setShowIndex }) {
    const handleShowHide = () => {
        setShowIndex(true)
    }
  return (
      <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4  ">
        <div className="flex justify-between" onClick={handleShowHide}>
        <span className="font-bold text-lg">
          {data.title} ({data.itemCards.length})
        </span>
        <span>⬇️</span>
      </div>
      {showItems && <MenuItemList itemList={data.itemCards}/>}
      </div>
  );
}

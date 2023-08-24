import React from 'react'
import { CDN_URL } from '../utils/constants';

export default function MenuItemList({itemList}) {
    console.log(itemList);
  return (
    itemList.map((item) => (
        <div className='flex justify-between m-2 p-2 border-b-2 '> 
          <div className='flex  flex-col w-4/6'>
           <span className='text-left font-bold'>{item?.card?.info.name}</span>
           <span className='text-left  text-sm '>Rs {item?.card?.info?.price/100}</span>
           <span className='text-left text-gray-400 text-lg '>{item?.card?.info?.description}</span>

           </div>
           <div className=''>
            <label className='absolute p-1 bg-black text-white rounded-md text-center '>Add +</label>
           <img
            className="w-[100] h-[100] rounded-md justify-self-center"
        src={
            CDN_URL +
          item.card.info.imageId
        }
      ></img>
           </div>
        </div>
    ))
  )
}

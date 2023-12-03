import React from 'react'
import { CDN_URL } from '../utils/constants';
import { useDispatch } from 'react-redux';
import { addItem } from '../utils/cartSlice';

export default function MenuItemList({itemList}) {
    console.log(itemList);
    const dispatch = useDispatch();
    const handleAddItems = (item) => {
        dispatch(addItem(item))

        // {
        //     payload: {""}
        // }

    }
  return (
    itemList.map((item) => (
        <div data-testid='food-item' key={item?.card?.info.name} className='flex justify-between m-2 p-2 border-b-2 '> 
          <div className='flex  flex-col w-4/6'>
           <span className='text-left font-bold'>{item?.card?.info.name}</span>
           <span className='text-left  text-sm '>Rs {item?.card?.info?.price/100}</span>
           <span className='text-left text-gray-400 text-lg '>{item?.card?.info?.description}</span>

           </div>
           <div className=''>
            <button className='absolute p-1 bg-black text-white rounded-md text-center' onClick={() => handleAddItems(item)}>Add +</button>
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

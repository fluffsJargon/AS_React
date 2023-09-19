import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import MenuItemList from './MenuItemList';
import { clearCart } from '../utils/cartSlice';
import Shimmer from './Shimmer';


export default function Cart() {
    const cartItems = useSelector((store) => store.cart.items)
    const dispatch = useDispatch()
    const hancleClearCart = () => {
      dispatch(clearCart())
    }

  return  (
    <div className='text-center m-4 p-4'>
      <h1 className='text-2xl font-bold'>Welcome to your cart</h1>
      <div className='w-6/12 m-auto'>
        <button className='p-2 m-2 text-white bg-black rounded-lg' onClick={hancleClearCart}>Clear</button>
        {cartItems.length === 0 && <h2>Cart is empty. Add items</h2>}
        <MenuItemList itemList={cartItems} ></MenuItemList>
      </div>
      </div>
  )
}

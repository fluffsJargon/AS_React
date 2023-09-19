import React from "react";

export default function ContactUs() {
  return (
    <div>
      <h1 className="font-bold text-center">Contact Us Page</h1>
      <form>
        <input type='text' className='border border-black p-2 m-2' placeholder='name'></input>
        <input type='text' className='border border-black p-2 m-2' placeholder='number'></input>
        <button className='border border-black rounded-lg p-2 m-2'>Submit</button>

      </form>
      
    </div>
  );
}

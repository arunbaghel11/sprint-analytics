import React from 'react'
import { AiFillAccountBook } from "react-icons/ai";
function upgrade  ()  {
  return (
    <div>
      <AiFillAccountBook/>
      <p className='text-1xl font-semibold '> 32 online now </p>
      <button className='text-2xl text-red-500 px-4 bg-green-600 ' >Upgrade</button>
    </div>
  )
}

export default upgrade

import React from 'react'
import { AiFillAccountBook } from "react-icons/ai";
function commit () {
  return (
    <div className=' flex flex-row items-center justify-between gap-4 ' >
     <AiFillAccountBook />
     <p className='text-1xl font-semibold '> 32 online now </p>
      <button className='text-2xl text-red-500 px-4 bg-red-600 ' >failed</button>
    </div>
  )
}

export default commit

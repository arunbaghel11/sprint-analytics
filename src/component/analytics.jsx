import React ,{useState} from 'react'

// import { AiFillAccountBook } from "react-icons/ai";

function Analytics  ()  {
 const [table , setTable] = useState(false);
 const handleToggle=()=>{
  setTable(!table);
 }

  return (
    <div>
      {!table?(
        <>
        <p className='text-1xl font-semibold '> 32 online now'</p>
        <button 
        onClick={handleToggle}
        className='text-2xl text-red-500 px-4 bg-red-600 '
        >
           show Details 
        </button>
        
        </>
      ):(
        <div class name='flex flex-col items-center justify-center w-full '> 
        <h2>table</h2>
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
  <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
    <tr>
      <th className='px-6 py-3'>Name</th>
      <th className='px-6 py-3'>Position</th>   
      <th className='px-6 py-3'>Office</th>
      <th className='px-6 py-3'>Age</th>
    </tr>
    </thead>
    <tbody>
    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
        <td className="px-6 py-4">John</td>
        <td className="px-6 py-4">Designer</td>
        <td className="px-6 py-4">UK</td>
        <td className="px-6 py-4">35</td>
      </tr>
      </tbody>
</table>
<button
        onClick={handleToggle}
        className='text-2xl text-red-500 px-4 bg-red-600 '
        >
           hide table 
        </button>
        </div>
      )
      }
   
    </div>
  );
}

export default Analytics

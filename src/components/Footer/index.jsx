import React from 'react'
import { Link } from 'react-router-dom'
export default function index() {
  return (
    <>
    <div className='border-t'>

      <div className="grid grid-cols-2 gap-2 p-6   text-center">
        <div>
          <Link to="/"  className='p-4 border-2 font-medium rounded-2xl border-indigo-300		 hover:bg-black  	 hover:text-white ' >Manage Expenses</Link>
          
        </div>
        <div>
          <Link to="/analyze" className='p-4 border-2 font-medium border-indigo-300	 rounded-2xl   hover:bg-black  hover:text-white  ' >Analyze Expenses</Link>
        </div>
      </div>

    </div>

    </>
  )
}

import React from 'react'
import Logo from "../../logo.svg"
import { User2 } from 'lucide-react';
export default function index() {
  return (
    <>
    <div className="header p-3 border ">
        <div className="grid grid-cols-2">
            <div className=''>
                <img className='h-14 w-14 lg:ml-80 cursor-pointer ' src={Logo} alt="" />
            </div>
            <div className=''>
               <User2  size={40} className='border cursor-pointer bg-blue-300 border-black rounded-full lg:ml-80'/>
            </div>
        </div>
    </div>
    </>
  )
}

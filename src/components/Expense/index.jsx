import React from 'react';
import { useNavigate } from 'react-router-dom';


export default function Index( props) {
  const navigate= useNavigate();

  
  return (
    <>
    <div className="text-x5 shadow-md text-black p-5 w-80  bg-white-800 m-10 ">
        <div className="grid grid-cols-2 gap-2">
            <div className=' text-left'>
            <p >{props.item.title} </p>
            </div>
            
            <div className='flex-1 '>
                <button  onClick={()=> navigate("/update",{state:props.item})} type="button"  className='ml-3  text-green-500 rounded-xl hover:text-white hover:bg-green-800 border p-2 '>Edit</button>
                <button onClick={()=>props.handleDelet(props.item.id)} type="button" className='ml-3 text-red-500  rounded-xl hover:text-white hover:bg-red-800 border p-2'>Delete</button>
            </div>
        </div>
        <div className="grid grid-rows-1 pt-3" >
            <p>Total =  {props.item.amount}</p>
        </div>
        



        
    </div>
    </>
  )
}

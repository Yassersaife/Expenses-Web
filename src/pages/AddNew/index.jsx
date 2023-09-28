import React, {useState} from "react";
import {collection,addDoc,getDocs}from '@firebase/firestore';
import  { useEffect } from 'react';
import { firestore } from "./../../Firebase";
import { useLocation } from 'react-router-dom';

export default function Index(props) {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState(0);
  const [date, setDate] = useState('');
  const [msg, setmsg] = useState('');
  const location = useLocation();
  const dataFromPreviousRoute = location.state;
    console.log(dataFromPreviousRoute);

  const handleSubmit= async (e) => {
    e.preventDefault();
    setmsg('');

    try {
      const dataCollection = collection(firestore,'title');
            const newItemData = {
        title: title,
        amount:amount,
        date:date,
      };

      await addDoc(dataCollection, newItemData);

      setmsg('Item added successfully');
    } catch (error) {
      console.error('Error adding item:', error);
    }
  };

  
  return (
    <>
        <div className=" flex justify-center flex-col place-items-center">
        <p className="text-2xl text-blue-500">Add Expense</p>

          <form onSubmit={handleSubmit}>
            <div className="mt-3 p-2 flex justify-center flex-col ">
                <div>
                  <div>
                    <label  htmlFor="title">Title</label>
                  </div>
                  <div>
                     <input onChange={(e) => {
                      setTitle(e.target.value)
                     }} className="mt-2 border-2 border-black py-1 px-2 w-80" id="title" type="text"  />
                  </div>
  
                </div>
                
              </div>
              <div className="mt-3  p-2 flex justify-center flex-col">
                <div>
                  <div>
                    <label  htmlFor="amount">Amount</label>
                  </div>
                  <div>
                     <input onChange={(e)=>{
                      setAmount(e.target.value)
                     }} className="mt-2 border-2 py-1 px-2 w-80 border-black " id="amount" type="number"/>
                  </div>
  
                </div>
                
              </div>
              <div className="mt-3  p-2 flex justify-center flex-col">
                <div>
                  <div>
                    <label  htmlFor="date">Due Date</label>
                  </div>
                  <div>
                     <input onChange={(e)=>{
                      setDate(e.target.value)
                     }} className="mt-2 border-2 border-black py-1 px-2 w-80" id="date" type="date"/>
                  </div>
  
                </div>
                
              </div>
              <div className="flex flex-col gap-5 py-4">
              <p className="text-xl text-green-500">{msg}</p>
              <button type="submit" className="p-2 bg-blue-400  items-center text-indigo-900 outline rounded m-4 w-40 text-xl  hover:bg-indigo-900 hover:text-white">Add</button>

              </div>

          </form>

              
            
          
        </div>
      
    </>
  );
}

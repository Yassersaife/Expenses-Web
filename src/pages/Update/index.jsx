import React, {useState} from "react";
import {collection,updateDoc,doc}from '@firebase/firestore';
import  { useEffect } from 'react';
import { firestore } from "../../Firebase";
import { useLocation,useNavigate } from 'react-router-dom';


export default function Index() {
  const location = useLocation();
  const navigate= useNavigate();

  const [title, setTitle] = useState(location.state.title);
  const [amount, setAmount] = useState(location.state.amount);
  const [date, setDate] = useState(location.state.date);
  const [msg, setmsg] = useState('');
const [documentId,setdocumentId]=useState(location.state.id);

  const dataFromPreviousRoute = location.state;
  console.log(dataFromPreviousRoute);
{/*
  useEffect(()=>{
    setTitle(dataFromPreviousRoute.title);
    setAmount(dataFromPreviousRoute.amount);
    setDate(dataFromPreviousRoute.date);
    setdocumentId(dataFromPreviousRoute.id);

  },[]);
*/}

  const handleSubmit= async (e) => {
    e.preventDefault();
    setmsg('');

    try {
       const dataCollection =  collection(firestore,'title');
       const documentRef = doc(dataCollection, documentId);

            const newItemData = {
        title: title,
        amount:amount,
        date:date,
      };

      await updateDoc(documentRef, newItemData);

      setmsg('Item update successfully');
      navigate('/');
      
    } catch (error) {
      console.error('Error adding item:', error);
    }
  };
console.log('updatepage');
  
  return (

    <>
        <div className=" flex justify-center flex-col place-items-center">
        <p className="text-2xl text-blue-500">Update Expense</p>

          <form onSubmit={handleSubmit}>
            <div className="mt-3 p-2 flex justify-center flex-col ">
                <div>
                  <div>
                    <label  htmlFor="title">Title</label>
                  </div>
                  <div>
                     <input value={title} onChange={(e) => {
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
                     <input  value={amount} onChange={(e)=>{
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
                     <input value={date} onChange={(e)=>{
                      setDate(e.target.value)
                     }} className="mt-2 border-2 border-black py-1 px-2 w-80" id="date" type="date"/>
                  </div>
  
                </div>
                
              </div>
              <div className="flex flex-col gap-5 py-4">
              <p className="text-xl text-green-500">{msg}</p>
              <button type="submit" className="p-2 bg-blue-400  items-center text-indigo-900 outline rounded m-4 w-40 text-xl  hover:bg-indigo-900 hover:text-white">Update</button>

              </div>

          </form>

              
            
          
        </div>
      
    </>
  );
}

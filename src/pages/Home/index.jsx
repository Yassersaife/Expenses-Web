import React from 'react'
import Expense from "../../components/Expense";
import { PlusCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import  { useEffect, useState } from 'react';
import { firestore } from "./../../Firebase";
import {collection,doc,deleteDoc,getDocs}from '@firebase/firestore';


export default function Index() {
  const [data, setData] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
   
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const dataCollection = collection(firestore,'title');

      const querySnapshot = await getDocs(dataCollection);

      const dataArray = querySnapshot.docs.map((doc) => ({
        id: doc.id, 

        ...doc.data(),
      }));

      setData(dataArray);
      setSearchResults(dataArray);

      console.log(data)
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleDelet= async (documentId) => {
    try {
      const itemRef = doc(firestore, 'title', documentId);
      await deleteDoc(itemRef);
      fetchData();
      
    } catch (error) {
      console.error('Error adding item:', error);
    }
  };
 
  

  const navigate= useNavigate();
  return (
    <>
    <div className="body grid grid-cols-1  place-items-center">
    <p className='sm:p-8 md:p-4 text-xl lg:text-center '>Expenses List</p>
    <div className='lg:text-start'>
    <input type="text" placeholder='search'  value={searchQuery}   onChange={(e) =>{ 
    setSearchQuery(e.target.value);
    const filteredData = data.filter((item) =>
      item.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setSearchResults(filteredData);
    }
  }

   className='border rounded-xl  items-start p-2 px-20 text-start focus:bg-slate-100' name="" id="" />
    </div>

    <div className=''>
  {searchQuery.trim() === '' ? (
    data.map((item, index) => (
      <Expense key={index} item={item} handleDelet={handleDelet} />
    ))
  ) : (
    searchResults.map((item, index) => (
      <Expense key={index} item={item} handleDelet={handleDelet} />
    ))
  )}
</div>
    <div>
    <PlusCircle size={50} onClick={()=>{
      navigate("/add",{state:data})
    }} className='bg-gray-600 cursor-pointer hover:bg-gray-900  text-white rounded-3xl lg:ml-96 mb-3'/>


    </div>

    </div>
    
    </>
  )
}

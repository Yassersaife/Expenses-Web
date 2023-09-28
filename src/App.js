import "./App.css";
import React, { useEffect, useState } from 'react';
import Home from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AddNew from "./pages/AddNew";
import Analyze from "./pages/Analyze";
import Update from "./pages/Update"
import { Route, Routes, BrowserRouter, Link } from "react-router-dom";

import {collection,addDoc,getDocs}from '@firebase/firestore';

import { firestore } from "./Firebase";


function App() {
  const [data, setData] = useState([]);

  const db = collection(firestore,'title').document;
  console.log(db);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const dataCollection = collection(firestore,'title');
        const querySnapshot = await getDocs(dataCollection);

        const dataArray = querySnapshot.docs.map((doc) => ({
         
          ...doc.data(),
        }));

        setData(dataArray);
        console.log(data.title);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route  path="/">
            <Route index  element={<Home />} />
            <Route path="add" element={<AddNew />} />
            <Route path="update" element={<Update />} />

          </Route>

          <Route path="analyze" element={<Analyze />} />
        </Routes>
        <Footer />
      </BrowserRouter>

      
    </>
  );
}

export default App;

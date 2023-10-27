import "./App.css";
import React from 'react';
import Home from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AddNew from "./pages/AddNew";
import Analyze from "./pages/Analyze";
import Update from "./pages/Update"
import { Route, Routes, BrowserRouter } from "react-router-dom";



function App() {
  return (
    <>
     <Header />
      <BrowserRouter>
        <Routes>
          <Route  path="/" />
            <Route index  element={<Home />} />
            <Route path="add" element={<AddNew />} />
            <Route path="update" element={<Update />} />
            <Route path="analyze" element={<Analyze />} />
        </Routes>
        <Footer />
      </BrowserRouter>

      
    </>
  );
}

export default App;

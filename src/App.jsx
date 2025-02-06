import React from "react";
import Home from "./Components/Home";
import { Route, Routes } from "react-router-dom";
import Create from "./Components/Create";
import Update from "./Components/Update";
import Delete from "./Components/Delete";


const App = () => {
  return (
    <>
    
   
   
    <Routes>
      <Route path="/"element={<Home/>}/>
      <Route path="/Create"element={<Create/>}/>
      <Route path="/delete/:id"element={<Delete/>}/>
      <Route path="/Update/:id"element={<Update/>}/>
      
    </Routes>
    
    </>
  );
};

export default App;

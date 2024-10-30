import React from "react";
import Home from './components/Home'
import { Routes,Route } from "react-router-dom";
import Details from "./components/Details";


const App = () => {
  return (
    <div className="h-screen w-full flex">
<Routes>
<Route path="/" element = {<Home/>} />
<Route path="/details/:id" element = {<Details/>} />

</Routes>
 </div>
  );
};

export default App;

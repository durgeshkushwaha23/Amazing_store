import React from "react";
import Home from './components/Home'
import { Routes,Route, useLocation } from "react-router-dom";
import Details from "./components/Details";
import { Link } from "react-router-dom";


const App = () => {
  const {search,pathname} = useLocation();
  return (
    <div className="h-screen w-full flex">
     {(pathname != "/"||search.length>0)&&( <Link to={"/"} className="text-red-500 text-2xl absolute left-[27%] top-[4%]" >
      Home</Link>)}
<Routes>
<Route path="/" element = {<Home/>} />
<Route path="/details/:id" element = {<Details/>} />

</Routes>
 </div>
  );
};

export default App;

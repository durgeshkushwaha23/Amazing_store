import axios from "axios";
import React, { useEffect, useState, createContext } from "react";

export const productContext = createContext();

const Context = (props) => {
  const [products, setProducts] = useState(JSON.parse(localStorage.getItem("products"))||null);

//   const getProducts = async () => {
//     try {
//       const { data } = await axios("https://fakestoreapi.com/products");
//       setProducts(data);
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   useEffect(() => {
//     getProducts();
//   }, []);
// console.log(products);
  return (
    <productContext.Provider value={[products, setProducts]}>
      {props.children}
    </productContext.Provider>
  );   
};

export default Context;

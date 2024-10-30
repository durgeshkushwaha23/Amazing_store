import axios from "axios";
import React, { useEffect, useState, createContext } from "react";

export const productContext = createContext();

const Context = (props) => {
  const [products, setProducts] = useState(null);

  const getProducts = async () => {
    try {
      const { data } = await axios("https://fakestoreapi.com/products");
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <productContext.Provider value={[products, setProducts]}>
      <div>{props.children}</div>
    </productContext.Provider>
  );
};

export default Context;

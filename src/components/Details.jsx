import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import Loading from './Loading';

const Details = () => {
  const [product, setProduct] = useState(null);
  const { id } = useParams();

  const getSingleProduct = async () => {
    try {
      const { data } = await axios.get(`https://fakestoreapi.com/products/${id}`);
      setProduct(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getSingleProduct();
  }, [id]); // Add id as a dependency to refetch if the id changes

  if (!product) return <div><Loading /></div>;

  return (
    <div className="w-[80%] h-full flex m-auto p-[10%]">
      <img 
        className="h-[80%] w-[50%] object-contain" 
        src={product.image} 
        alt={product.title} 
      />
      <div className="content">
        <h1 className="mt-8 text-4xl mb-1">{product.title}</h1>
        <h3 className="text-blue-300 font-semibold mb-1">{product.category}</h3>
        <h2 className="text-red-400 mb-1">${product.price}</h2>
        <p className="text-zinc-600 mb-7">{product.description}</p>
        <Link className="py-1 px-3 border-[1px] rounded-md border-green-800 text-green-800">Edit</Link>
        <Link className="ml-3 mb-4 py-1 px-3 text-white bg-red-400 rounded-md">Delete</Link>
      </div>
    </div>
  );
};

export default Details;

import React, { useContext, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Loading from './Loading';
import { productContext } from '../Utils/Context';

const Details = () => {
  const [products, setProducts] = useContext(productContext);
  const [product, setProduct] = useState(null);
  const { id } = useParams();



  useEffect(() => {
    if (products && products.length > 0 && !product) {
      const foundProduct = products.find((p) => p.id == id);
      setProduct(foundProduct);
    }
  }, [id, products]); 

  if (!product) return <div><Loading /></div>;

  const productDeleteHandler = (id) =>{
    const FilterProducts = products.filter((p)=>p.id !== id);
    setProducts(FilterProducts);
    localStorage.setItem("products",JSON.stringify(FilterProducts))
  }

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
        <Link onClick={()=>productDeleteHandler(product.id)} className="ml-3 mb-4 py-1 px-3 text-white bg-red-400 rounded-md">Delete</Link>
      </div>
    </div>
  );
};

export default Details;

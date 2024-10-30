import React from 'react'
import { Link } from 'react-router-dom'

const Details = () => {
  return (
    <div className='w-[80%] h-full flex  m-auto p-[10%] ' >
       
       <img 
       className='h-[80%] w-[50%] object-contain'
       src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" alt="" />
       <div className="content">
        <h1 className='mt-8 text-4xl mb-1' >Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops</h1>
        <h3 className='text-blue-300 font-semibold mb-1' >men's clothing</h3>
        <h2 className='text-red-400 mb-1' > 109.95</h2>
        <p className='text-zinc-600 mb-7' >Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday</p>
        <Link className=' py-1 px-3 border-[1px] rounded-md border-green-800 text-green-800 ' >Edit</Link>
        <Link className='ml-3 mb-4 py-1 px-3 text-white bg-red-400 rounded-md' >Delete</Link>
       
       </div>
    </div>
  )
}

export default Details
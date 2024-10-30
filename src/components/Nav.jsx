import React from 'react'

const Nav = () => {
  return (
    <div  >
        <nav className="w-[15%] ml-2 h-full flex flex-col items-center pt-5">
        <a
          className="py-1 uppercase px-9 ml-28 border-[1px] text-blue-600 rounded border-blue-300"
          href="/create"
        >
          add new product
        </a>
        <hr className="my-3 w-[80%]" />
        <h1 className="text-2xl mb-3 w-[80%]">category filter</h1>
        <ul className="w-[80%]">
          <li className="mb-3 flex items-center">
            <span className="rounded-full mr-2 w-[13px] h-[13px] bg-yellow-300"></span>
            cart1
          </li>
          <li className="mb-3 flex items-center">
            <span className="rounded-full mr-2 w-[13px] h-[13px] bg-green-300"></span>
            cart2
          </li>
          <li className="mb-3 flex items-center">
            <span className="rounded-full mr-2 w-[13px] h-[13px] bg-blue-300"></span>
            cart3
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Nav
import React, { useContext } from 'react';
import { productContext } from '../Utils/Context';
import { Link } from 'react-router-dom';

const Nav = ({ onCategorySelect }) => {
  const [products] = useContext(productContext);

  // Get unique categories from products
  const distinctCategories = products ? [...new Set(products.map(p => p.category))] : [];

  // Define a color palette for categories
  const colors = ["#FFB6C1", "#87CEFA", "#FFA500", "#90EE90", "#DDA0DD", "#FFD700", "#20B2AA"];
  
  // Map each category to a color
  const categoryColors = distinctCategories.map((category, index) => ({
    category,
    color: colors[index % colors.length]
  }));
  
  console.log("Category Colors:", categoryColors); // Debugging to verify category colors

  return (
    <div>
      <nav className="w-[15%] ml-2 h-full flex flex-col items-center pt-5">
        <a
          className="py-1 uppercase px-9 ml-28 border-[1px] text-blue-600 rounded border-blue-300"
          href="/create"
        >
          add new product
        </a>
        <hr className="my-3 w-[80%]" />
        <h1 className="text-2xl mb-3 w-[80%]">Category Filter</h1>
        <div className="w-[80%]">
          {categoryColors.map(({ category, color }, index) => (
            <Link to={`/?category=${category}`}
              key={index}
              className="mb-3 flex items-center cursor-pointer"
              onClick={() => onCategorySelect(category)}
            >
              <span
                className="rounded-full mr-2 w-[13px] h-[13px]"
                style={{ backgroundColor: color }}
              ></span>
              {category}
            </Link>
          ))}
          {/* Option to show all products */}
          <li
            className="mb-3 flex items-center cursor-pointer text-blue-500"
            onClick={() => onCategorySelect(null)}
          >
            Show All
          </li>
        </div>
      </nav>
    </div>
  );
};

export default Nav;

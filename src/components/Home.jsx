// import React, { useContext, useEffect, useState } from "react";
// import Nav from "./Nav";
// import { Link } from "react-router-dom";
// import { productContext } from "../Utils/Context";
// import Loading from "./Loading";
// import { useLocation } from "react-router-dom";
// import axios from "../Utils/axios";

// const Home = () => {
//   const [products] = useContext(productContext);
//   const { search } = useLocation();
//   const category = decodeURIComponent(search.split("=")[1]);
//   console.log(category);

//   const [filterproducts, setfilterproductsset] = useState(null);

//   const getproductscategory = async () => {
//     try {
//       const { data } = await axios.get(`/products/category/${category}`);
//       setfilterproductsset(data);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   useEffect(() => {
//     if (!filterproducts || category == "undefined")
//       setfilterproductsset(products);
//     if (category != "undefined") {
//       //getproductscategory();
//       filterproducts(products.filter((p) =>p.category===category));
//     }
//   }, [category, products]);

//   // Conditional rendering to avoid null or undefined products
//   if (!products)
//     return (
//       <div>
//         {" "}
//         <Loading />{" "}
//       </div>
//     );

//   return (
//     <>
//       <Nav />
//       <div className="h-full w-[85%] flex flex-wrap overflow-x-hidden overflow-y-auto p-20">
//         {filterproducts &&
//           filterproducts.map((p, i) => (
//             <Link
//               to={`/details/${p.id}`}
//               key={i}
//               className="card ml-4 border shadow rounded w-[18%] h-[30vh] flex-col flex justify-center items-center"
//             >
//               <div
//                 className="hover:scale-110 mb-3 w-full h-[80%] bg-contain bg-no-repeat bg-center"
//                 style={{
//                   backgroundImage: `url(${p.image})`,
//                 }}
//               ></div>
//               <h1>{p.title}</h1>
//             </Link>
//           ))}
//       </div>
//     </>
//   );
// };

// export default Home;


import React, { useContext, useEffect, useState } from "react";
import Nav from "./Nav";
import { Link } from "react-router-dom";
import { productContext } from "../Utils/Context";
import Loading from "./Loading";
import { useLocation } from "react-router-dom";

const Home = () => {
  const [products] = useContext(productContext);
  const { search } = useLocation();
  const category = decodeURIComponent(search.split("=")[1]);
  
  const [filterproducts, setfilterproducts] = useState(null);

  useEffect(() => {
    console.log("Products from context:", products);  // Check if products are available
    console.log("Category from URL:", category);      // Check if category is being set correctly

    if (!products) return; // Avoid running if products are not yet loaded

    if (!category || category === "undefined") {
      setfilterproducts(products);  // Show all products if no valid category
      console.log("Setting all products as filterproducts.");
    } else {
      const filtered = products.filter((p) => p.category === category);
      setfilterproducts(filtered);
      console.log("Filtered products:", filtered);
    }
  }, [category, products]);

  // Conditional rendering to avoid null or undefined products
  if (!products) return <Loading />;

  return (
    <>
      <Nav />
      <div className="h-full w-[85%] flex flex-wrap overflow-x-hidden overflow-y-auto p-20">
        {filterproducts && filterproducts.length > 0 ? (
          filterproducts.map((p, i) => (
            <Link
              to={`/details/${p.id}`}
              key={i}
              className="card ml-4 border shadow rounded w-[18%] h-[30vh] flex-col flex justify-center items-center"
            >
              <div
                className="hover:scale-110 mb-3 w-full h-[80%] bg-contain bg-no-repeat bg-center"
                style={{
                  backgroundImage: `url(${p.image})`,
                }}
              ></div>
              <h1>{p.title}</h1>
            </Link>
          ))
        ) : (
          <div>No products found for this category.</div>
        )}
      </div>
    </>
  );
};

export default Home;


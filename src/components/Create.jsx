import React, { useContext, useState } from "react";
import { productContext } from "../Utils/Context";
import { nanoid } from "nanoid";
import { toast } from "react"; // Ensure toast is imported if you're using react-toastify
import { useNavigate } from "react-router-dom";

const Create = () => {
  const naviagate = useNavigate();
  const [products, setProducts] = useContext(productContext);

  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  const addProductHandler = (e) => {
    e.preventDefault();

    if (
      title.trim().length < 5 ||
      category.trim().length < 5 ||
      image.trim().length < 5 ||
      price.trim().length < 2 ||
      description.trim().length < 5
    ) {
      alert("Each and every input must have at least 4 characters");
      return;
    }

    const product = {
      id: nanoid(),
      title,
      image,
      category,
      price,
      description,
    };
    // console.log(product);

    setProducts([...products, product]); // Corrected line: add the new product to the products list
    naviagate("/");
    localStorage.setItem("products", JSON.stringify([...products, product]));
    // toast.success("New product added");
  };

  return (
    <form
      onSubmit={addProductHandler}
      className="p-[5%] h-screen w-screen flex flex-col items-center"
    >
      <h1 className="mb-5 font-bold text-2xl uppercase">Add New Product</h1>
      <input
        type="text"
        placeholder="Title"
        className="text-3xl bg-zinc-300 rounded p-3 w-1/2 mb-4 border-none"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
      />
      <input
        type="url"
        placeholder="Image link"
        className="text-3xl bg-zinc-300 rounded p-3 w-1/2 mb-4 border-none"
        onChange={(e) => setImage(e.target.value)}
        value={image}
      />
      <input
        type="number"
        placeholder="Price"
        className="text-3xl bg-zinc-300 rounded p-3 w-1/2 mb-4 border-none"
        onChange={(e) => setPrice(e.target.value)}
        value={price}
      />
      <input
        type="text"
        placeholder="Category"
        className="text-3xl bg-zinc-300 rounded p-3 w-1/2 mb-4 border-none"
        onChange={(e) => setCategory(e.target.value)}
        value={category}
      />
      <textarea
        className="text-3xl bg-zinc-300 rounded p-3 w-1/2 mb-4 border-none"
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
        value={description}
        rows="10"
      ></textarea>
      <button
        type="submit" // Add type="submit" to ensure it triggers form submission
        className="py-1 uppercase px-9 ml-28 border-[1px] text-blue-600 rounded border-blue-300"
      >
        Add New Product
      </button>
    </form>
  );
};

export default Create;

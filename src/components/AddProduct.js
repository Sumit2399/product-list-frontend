import React, { useState } from "react";
import axios from "axios";
import API_URL from "../config";

const AddProduct = ({ onProductAdded }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newProduct = { name, description, price: parseFloat(price), category };

    try {
      await axios.post(`${API_URL}/products`, newProduct);
      onProductAdded(); // Refresh the product list
      setName("");
      setDescription("");
      setPrice("");
      setCategory("");
    } catch (error) {
      console.error("Error adding product:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Product</h2>
      <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
      <input type="text" placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} />
      <input type="number" placeholder="Price" value={price} onChange={(e) => setPrice(e.target.value)} required />
      <input type="text" placeholder="Category" value={category} onChange={(e) => setCategory(e.target.value)} />
      <button type="submit">Add Product</button>
    </form>
  );
};

export default AddProduct;

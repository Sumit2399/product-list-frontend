import React, { useState } from "react";
import axios from "axios";
import API_URL from "../config";
import "../styles.css"; // Import global styles

const AddProduct = ({ onProductAdded }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("description", description);
    formData.append("price", price);
    formData.append("category", category);
    if (image) {
      formData.append("image", image);
    }

    try {
      await axios.post(`${API_URL}/products`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      onProductAdded();
      setName("");
      setDescription("");
      setPrice("");
      setCategory("");
      setImage(null);
    } catch (error) {
      console.error("Error adding product:", error);
    }
  };

  return (
    <div className="form-container">
      <h2>Add Product</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
        <input type="text" placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} />
        <input type="number" placeholder="Price" value={price} onChange={(e) => setPrice(e.target.value)} required />
        <input type="text" placeholder="Category" value={category} onChange={(e) => setCategory(e.target.value)} />
        <input type="file" placeholder="Image enter" accept="image/*" onChange={(e) => setImage(e.target.files[0])} />
        <button type="submit">Add Product</button>
      </form>
    </div>
  );
};

export default AddProduct;

import React, { useEffect, useState } from "react";
import axios from "axios";
import API_URL from "../config";
import "../styles.css"; // Import global styles

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get(`${API_URL}/products`)
      .then(response => setProducts(response.data))
      .catch(error => console.error("Error fetching products:", error));
  }, []);

  return (
    <div>
      <h2>Product List</h2>
      <div className="product-container">
        {products.map(product => (
          <div key={product.id} className="product-card">
            {product.imageUrl && <img src={product.imageUrl} alt={product.name} />}
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p><strong>Price:</strong> ${product.price}</p>
            <p><strong>Category:</strong> {product.category}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;

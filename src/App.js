import React, { useState } from "react";
import ProductList from "./components/ProductList";
import AddProduct from "./components/AddProduct";

function App() {
  const [refresh, setRefresh] = useState(false);

  return (
    <div>
      <h1>Product Catalog</h1>
      <AddProduct onProductAdded={() => setRefresh(!refresh)} />
      <ProductList key={refresh} />
    </div>
  );
}

export default App;

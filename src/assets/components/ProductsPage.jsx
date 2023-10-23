// src/components/ProductsPage.jsx
import { useState } from "react";
import jsonData from "./../../data.json";
import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";

function ProductsPage() {
  const [products, setProducts] = useState(jsonData);

  function filteredProducts(searchInput) {
    console.log(searchInput);
    if (searchInput === "") {
      setProducts(jsonData);
    } else {
      const copyProducts = [...products];
      const filteredArray = copyProducts.filter((product) => {
        return product.name.toLowerCase().includes(searchInput.toLowerCase());
      });
      setProducts(filteredArray);
    }
  }
  function inStockProducts(searchInput) {
    const copyProducts = [...products];
    if (searchInput) {
      const inStockArray = copyProducts.filter((product) => {
        return product.inStock === true;
      });
      console.log(inStockArray);
      setProducts(inStockArray);
    } else {
      setProducts(jsonData);
    }
  }

  return (
    <div>
      <div className="heading">
        <h1>IronStore</h1>
      </div>
      <SearchBar
        filteredProducts={filteredProducts}
        inStockProducts={inStockProducts}
      />
      <ProductTable products={products} />
    </div>
  );
}

export default ProductsPage;

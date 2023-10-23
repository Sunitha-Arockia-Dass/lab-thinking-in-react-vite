function SearchBar({ filteredProducts, inStockProducts }) {
  function showChange(e) {
    const searchInput = e.target.value;
    filteredProducts(searchInput);
  }
  function handleChange(e) {
    const searchInput = e.target.checked;
    inStockProducts(searchInput);
  }

  return (
    <div>
      <div className="search">
        <label>Search</label>
        <br />
        <input type="text" onChange={showChange} />
        <br />
      </div>
      <div className="check">
        <input type="checkbox" onChange={handleChange} />
        <label>Only Show Products in Stock</label>
      </div>
    </div>
  );
}

export default SearchBar;

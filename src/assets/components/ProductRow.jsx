function ProductRow({ products }) {
  return (
    <div className="product-table">
      <table>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
        {products.map((product) => {
          return (
            <tr key={product.id}>
              {product.inStock ? (
                <td>{product.name}</td>
              ) : (
                <td style={{ color: "red" }}>{product.name}</td>
              )}
              <td>{product.price}</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
}

export default ProductRow;

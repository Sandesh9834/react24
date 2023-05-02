export function Gadgets({ productList }) {
  return (
    <div>
      <h2>Gadgets</h2>
      <ol>
        {productList.map((product) => (
          <li
            style={{
              border: product.price > 50000 ? "orange 4px solid" : ""
            }}
          >
            Name : {product.name}, Description : {product.description}, Price :
            {product.price}
          </li>
        ))}
      </ol>
    </div>
  );
}

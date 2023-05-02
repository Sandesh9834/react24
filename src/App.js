//Build a React component called Gadgets that receives an array of products as a prop. Render each product's name, description, and price as an ordered list. Add a border around the product details which has price above 50000.

import { Gadgets } from "./Gadgets";
import { products } from "./data";

export default function App() {
  return (
    <div className="App">
      <Gadgets productList={products} />
    </div>
  );
}

import { useState } from "react";
import products from "./produsts";

function ProductSearch() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const filteredProducts = products.filter((product) => {
    const matchSearch = product.name
      .toLowerCase()
      .includes(search.toLowerCase());
    const matchCategory = category === "All" || category === product.category;

    return matchCategory && matchSearch;
  });

  return (
    <>
      <h1>Product Search</h1>
      <div>
        <input
          type="text"
          name="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          name="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="All">All</option>
          <option value="Electronics">Electronics</option>
          <option value="Clothing">Clothing</option>
        </select>
      </div>

      <div>
        <h3>total products : {filteredProducts.length}</h3>
        <ul>
          {filteredProducts.map((item, index) => (
            <li key={item.id}>
              {item.name} {item.category}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default ProductSearch;

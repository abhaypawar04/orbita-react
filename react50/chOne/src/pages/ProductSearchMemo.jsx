import { useMemo, useState } from "react";
import products from "./produsts";

function ProductSearchMemo() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const filteredData = useMemo(() => {
    console.log("filtering products");

    return products.filter((product) => {
      const matchSearch = product.name
        .toLowerCase()
        .includes(search.toLowerCase());

      const matchCategory = category === "All" || category === product.category;

      return matchSearch && matchCategory;
    });
  }, [search, category]);

  return (
    <>
      <div>
        <h1>useMemo searching</h1>
        <hr />
      </div>

      <div>
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="All">All</option>
          <option value="Electronics">Electronics</option>
          <option value="Clothing">Clothing</option>
        </select>
      </div>

      <div>
        <ul>
          {filteredData.map((item) => (
            <li key={item.id}>
              {item.name} , {item.category}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default ProductSearchMemo;

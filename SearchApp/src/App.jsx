import { useState } from "react";
import SearchBox from "./components/SearchBox";
import ResultList from "./components/ResultList";

function App() {
  const products = [
    "Apple",
    "Banana",
    "Orange",
    "Mango",
    "Pineapple",
    "Watermelon",
    "Kiwi",
    "Grapes",
    "Papaya",
    "Strawberry",
  ];

  const [search, setSearch] = useState("");
  const filtredProducts = products.filter((product) =>
    product.toLowerCase().includes(search.toLowerCase()),
  );
  return (
    <>
      <h1>App is Here </h1>
      <SearchBox search={search} onSearch={setSearch} />
      <ResultList products={filtredProducts} />
    </>
  );
}
export default App;

function SearchBox({ search, onSearch }) {
  return (
    <>
      <input
        type="text"
        name="search"
        value={search}
        onChange={(e) => onSearch(e.target.value)}
        placeholder="search products"
      />
    </>
  );
}
export default SearchBox;

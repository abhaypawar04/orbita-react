function ResultList({ products }) {
  if (products.length === 0 || products.length < 0)
    return <p>no result found</p>;

  return (
    <>
      <ul>
        {products.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </>
  );
}
export default ResultList;

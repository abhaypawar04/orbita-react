function Child({ onClick }) {
  console.log("child rendered");

  return (
    <>
      <h1>child componenet</h1>
      <button onClick={onClick}>click me</button>
    </>
  );
}

export default React.memo(Child);

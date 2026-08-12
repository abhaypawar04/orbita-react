const initialState = [];

const cartReducer = (state, action) => {
  switch (action.type) {
    case "add_item":
      return [...state, action.payload];

    case "remove_item":
      return state.filter((item) => item.id !== action.payload);
  }
};

function ShoppingCart() {
  return (
    <>
      <h1>here is a heading 1</h1>
    </>
  );
}
export default ShoppingCart;

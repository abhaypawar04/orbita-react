function CartItem({ item, dispatch }) {
  return (
    <>
      <div>
        <h3>{item.name}</h3>
        <p>Price: ₹{item.price}</p>
        <p>Quantity: {item.qty}</p>
      </div>

      <div>
        <button
          onClick={() => dispatch({ type: "increase_qty", payload: item.id })}
        >
          increase
        </button>
        <button
          onClick={() => dispatch({ type: "decrease_qty", payload: item.id })}
        >
          decrease
        </button>
        <button
          onClick={() => dispatch({ type: "remove_item", payload: item.id })}
        >
          remove item
        </button>
      </div>
    </>
  );
}

export default CartItem;

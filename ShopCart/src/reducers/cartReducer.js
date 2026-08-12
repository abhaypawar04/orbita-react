export function cartReducer(state, action) {
  switch (action.type) {
    case "add_item":
      return [...state, action.payload];

    case "remove_item":
      return state.filter((item) => item.id !== action.payload);

    case "increase_quantity":
      return state.map((item) =>
        item.id === action.payload ? { ...item, qty: item.qty + 1 } : item,
      );

    case "decrease_quantity":
      return state.map((item) =>
        item.id === action.payload ? { ...item, qty: item.qty - 1 } : item,
      );

    default:
      return state;
  }
}

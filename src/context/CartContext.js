import React from "react";

const CartContext = React.createContext({
  items: {},
  updateCart: () => {},
});

export default CartContext;

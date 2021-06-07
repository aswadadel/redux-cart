import React from "react";

const CartContext = React.createContext({
  items: {},
  itemsNum: 0,
  itemsPrice:0,
  updateCart: () => {},
});

export default CartContext;

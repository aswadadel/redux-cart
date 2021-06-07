import React, { useState, useReducer } from "react";
import Header from "./components/Header";
import ShopList from "./components/ShopList";
import CartContext from "./context/CartContext";

function reducer(prevState, action) {
  switch (action.type) {
    case "update":
      let newItem = null;
      if (prevState.items[action.id]) {
        newItem = { ...prevState.items[action.id] };
        newItem.amount += action.amount;
      } else {
        newItem = { ...action.totalItems[action.id] };
        newItem.amount = action.amount;
      }
      let newTotal = prevState.itemsNum + action.amount;
      let newPrice =
        prevState.itemsPrice +
        action.totalItems[action.id].price * action.amount;

      return {
        itemsNum: newTotal,
        itemsPrice: newPrice,
        items: {
          ...prevState.items,
          [action.id]: newItem,
        },
      };
    default:
      return false;
  }
}

function App() {
  const [totalItems, setTotalItems] = useState({
    0: {
      title: "sushi",
      description: "Finest fish and veggies",
      price: 22.99,
    },
    1: {
      title: "Schnitzel",
      description: "A german specialty!",
      price: 16.5,
    },
    2: {
      title: "BBQ Burger",
      description: "American, raw, meaty",
      price: 12.99,
    },
  });

  const [cartItems, dispatchCartItems] = useReducer(reducer, {
    items: {},
    itemsNum: 0,
    itemsPrice: 0,
  });

  const updateCartHandler = (id, amount) => {
    dispatchCartItems({ type: "update", id, amount, totalItems });
  };

  return (
    <CartContext.Provider
      value={{
        items: cartItems.items,
        itemsNum: cartItems.itemsNum,
        itemsPrice: cartItems.itemsPrice,
        updateCart: updateCartHandler,
      }}
    >
      <Header />
      <ShopList totalItems={totalItems} />
    </CartContext.Provider>
  );
}

export default App;

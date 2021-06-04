import React, { useState } from "react";
import Header from "./components/Header";
import ShopList from "./components/ShopList";
import CartContext from "./context/CartContext";

function App() {
  const [cartItems, setCartItems] = useState({
    0: { title: "sushi", description: "Finest fish and veggies", price: 22.99 , amount: 0},
    1: { title: "Schnitzel", description: "A german specialty!", price: 16.5, amount: 0 },
    2: { title: "BBQ Burger", description: "American, raw, meaty", price: 12.99, amount: 0 },
  });

  const updateCartHandler = (id, amount) => {
    setCartItems((prevItems) => {
      const newItem = {...prevItems[id]}
      newItem.amount += amount
      console.log(newItem)
      // console.log(newItem)
      return {
        ...prevItems,
        [id]: newItem
      };
    });
  };

  return (
    <CartContext.Provider
      value={{ items: cartItems, updateCart: updateCartHandler }}
    >
      <Header />
      <ShopList />
    </CartContext.Provider>
  );
}

export default App;

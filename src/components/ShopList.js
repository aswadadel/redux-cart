import React, { useContext } from "react";
import Card from "../UI/Card";
import ShopItem from "./ShopItem";
import CartContext from '../context/CartContext'

function ShopList({ children }) {
  const ctx = useContext(CartContext)
  return (
    <Card>
      {/* {ctx.items && ctx.items.map(item => (
        <ShopItem data={item} key={item.id}/>
      ))} */}
      {Object.keys(ctx.items).map(key => (
        <ShopItem item={ctx.items[key]} id={key} key={key}/>
      ))}
      {/* <ShopItem item={ctx.items[0]} id={0}/> */}
    </Card>
  );
}

export default ShopList;

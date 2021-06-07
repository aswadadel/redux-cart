import React from "react";
import Card from "../UI/Card";
import ShopItem from "./ShopItem";

function ShopList({ totalItems }) {
  return (
    <Card>
      {Object.keys(totalItems).map(key => (
        <ShopItem item={totalItems[key]} id={key} key={key}/>
      ))}
    </Card>
  );
}

export default ShopList;

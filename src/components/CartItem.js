import React from "react";
import styled from "styled-components";
import Item from "../UI/Item";


const H3 = styled.h3``;

function CartItem({item, id}) {
  return <Item>
      <H3>{item.title}</H3>
  </Item>;
}

export default CartItem;

import React from "react";
import styled from "styled-components";
import Item from "../UI/Item";


const H3 = styled.h3``;
const P = styled.p``;

function CartItem({item, id}) {
  return <Item>
      <H3>{id}. {item.title}</H3>
      <P>{item.amount}</P>
  </Item>;
}

export default CartItem;

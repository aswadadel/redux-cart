import React, { useContext, useRef} from "react";
import styled from "styled-components";
import CartContext from "../context/CartContext";
import Button from "../UI/Button";
import Item from "../UI/Item";

const Title = styled.h2``;
const Description = styled.p``;
const Price = styled.h3`
  color: brown;
`;
const Label = styled.label`
    font-weight: bold;
    margin-right: 10px;
    margin-bottom: 15px;
`;
const Input = styled.input`
    font-size: 1.2rem;
    width: 3ch;
    margin-bottom: 15px;
`;

function ShopItem({ item, id}) {
  const ctx = useContext(CartContext)
  const inputRef = useRef()

  const clickHandler = () => {
    ctx.updateCart(id, parseInt(inputRef.current.value))
  }
  return (
    <Item>
      <div>
        <Title>{item.title}</Title>
        <Description>{item.description}</Description>
        <Price>${item.price}</Price>
      </div>
      <div>
        <Label>Amount</Label>
        <Input type='number' defaultValue='1' ref={inputRef}></Input>
        <br/>
        <Button onClick={clickHandler}>+Add</Button>
      </div>
    </Item>
  );
}

export default ShopItem;

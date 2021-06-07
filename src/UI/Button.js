import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  color: white;
  margin: 0;
  padding: 0.8rem 2rem;
  color: ${props => props.light? 'brown': 'white'};
  background-color: ${props => props.light? 'white':'#6b0000'};
  border-radius: 15px;
  font-size: 1rem;
  font-weight: bold;
  ${props => props.light? 'border: 2px solid brown;':'border: none;'}
  cursor: pointer;
  & span {
    background-color: crimson;
    border-radius: 50%;
    border-radius: 10px;
    padding: 0.1rem 0.5rem;
    margin-left: 1ch;
  }
`;

function Button({ children , light, onClick: clickHandler, animation}) {
  return <StyledButton className={animation} light={light} onClick={clickHandler}>{children}</StyledButton>;
}

export default Button;

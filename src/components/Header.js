import React from "react";
import styled from "styled-components";
import Cart from './Cart'

const Nav = styled.nav`
  position: sticky;
  top: 0;
  left: 0;
  height: 100px;
  width: 100vw;
  box-sizing: border-box;
  padding: 0 10%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: brown;
  color: white;
`;

const H1 = styled.h1`
  font-size: 30px;
  margin: 0;
`;

function Header() {
  return (
    <Nav>
      <H1>
        ReactShopping 
      </H1>
      <Cart/>
    </Nav>
  );
}

export default Header;

import React from "react";
import styled from "styled-components";
import Card from "./Card";

const BackDrop = styled.div`
  position: fixed;
  margin: 0;
  top: 0;
  left: 0;
  background-color: black;
  opacity: 50%;
  height: 100vh;
  width: 100vw;
  z-index: 10;
`;
const Window = styled(Card)`
    position: fixed;
    top: 20%;
    left: 30%;
    width: 40%;
    z-index: 11;
`;

function Modal({ children }) {
  return (
    <>
      <BackDrop />
      <Window>{children}</Window>
    </>
  );
}

export default Modal;

import React, { useContext } from "react";
import ReactDOM from "react-dom";
import CartContext from "../context/CartContext";
import Button from "../UI/Button";
import Modal from "../UI/Modal";
import CartItem from "./CartItem";

function Cart() {
  const ctx = useContext(CartContext);
  return (
    <>
      {ReactDOM.createPortal(
        <Modal>
          {Object.keys(ctx.items).map((key) => (
            <CartItem item={ctx.items[key]} key={key} id={key} />
          ))}
        </Modal>,
        document.getElementById("modal-root")
      )}
      <Button>
        🛒Your Cart<span>5</span>
      </Button>
    </>
  );
}

export default Cart;

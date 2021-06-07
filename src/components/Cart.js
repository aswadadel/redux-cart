import React, { useContext, useState, useEffect } from "react";
import CartContext from "../context/CartContext";
import Button from "../UI/Button";
import Item from "../UI/Item";
import Modal from "../UI/Modal";
import CartItem from "./CartItem";
import AnimationCSS from "./CartAnimation.module.css";

function Cart() {
  const ctx = useContext(CartContext);
  const [showModal, setShowModal] = useState(false);
  const [animation, setAnimation] = useState(false)

  const removeModal = () => setShowModal(false);
  const displayModal = () => setShowModal(true);

  useEffect(() => {
    if(ctx.itemsNum === 0) return;
    setAnimation(AnimationCSS.bump)
    const timer = setTimeout(() => {
      setAnimation('')
    }, 300);
    return () => {
      clearTimeout(timer)
    }
  }, [ctx.itemsNum])

  return (
    <>
      {showModal && (
        <Modal clickHandler={removeModal}>
          {Object.keys(ctx.items).map((key) => (
            <CartItem item={ctx.items[key]} key={key} id={key} />
          ))}
          <Item>
            <h3 style={{ marginLeft: "auto" }}>
              Your Total: ${ctx.itemsPrice.toFixed(2)}
            </h3>
          </Item>
        </Modal>
      )}
      <Button onClick={displayModal} animation={animation}>
        🛒Your Cart<span>{ctx.itemsNum}</span>
      </Button>
    </>
  );
}

export default Cart;

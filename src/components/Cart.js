import React from 'react'
// import ReactDOM from "react-dom";
import Button from '../UI/Button'


function Cart() {
    return (
        <>
        {/* {ReactDOM.createPortal(<div></div>, document.getElementById('modal-root'))} */}
        <Button>
            🛒Your Cart<span>5</span>
        </Button>
        </>
    )
}

export default Cart

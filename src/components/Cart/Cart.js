import React, {  useState } from "react";

import classes from "./Cart.module.css";
import Modal from "../UI/Modal";
import { useSelector, useDispatch } from "react-redux";
import { cartActions } from "../../reduxstore/cart-slice";
import CartItem from "./CartItem";
import Checkout from "./Checkout";

const Cart = (props) => {
    const [checkout, setCheckout] = useState(false);
    const dispatch = useDispatch();
    const items = useSelector(state => state.cart.items);
    const ttlPrice = useSelector(state => state.cart.totalPrice);
    const totalPrice = `$${ttlPrice.toFixed(2)}`;
    const handleCart = () => {
        props.onHideCart()
    };

    const cartItemRemoveHandler = (id) => {
        dispatch(cartActions.removeItem({id}))
    };

    const activateCheckout = () => {
        setCheckout(true);
    };

    const cartItemAddHandler = (item) => {
        dispatch(cartActions.addItem({ ...item, amount: 1 }));
    };

    const cartItems = items.map((item) => (
        <ul><CartItem id={item.id} price={item.price} onRemove={cartItemRemoveHandler.bind(null, item.id)} onAdd={cartItemAddHandler.bind(null, item)} name={item.name} amount={item.amount} /></ul>
    )
    );

    const cancelHandler = () => {
        setCheckout(false);
    }

    return (<Modal onClick={handleCart}>
        {cartItems}
        <div onClick={handleCart} className={classes.total}>
            <span>TotalAmount</span>
            <span>{totalPrice}</span>
        </div>
        <div className={classes.actions}>
            <button onClick={handleCart} className={classes['button--alt']}>Close</button>
            <button className={classes.button} onClick={activateCheckout}>Order</button>
            {checkout && <Checkout order={items.items} totalAmount={totalPrice} onHandleCheckout={props.onHideCart} onCancel={cancelHandler} />}
        </div>
    </Modal>);
}

export default Cart;
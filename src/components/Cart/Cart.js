import React, { useContext, useState } from "react";

import classes from "./Cart.module.css";
import Modal from "../UI/Modal";
import CartContext from "../../store/cart.context"
import CartItem from "./CartItem";
import Checkout from "./Checkout";

const Cart = (props) => {
    const [checkout, setCheckout] = useState(false)
    const ctx = useContext(CartContext);
    const totalAmount= `$${ctx.totalAmount.toFixed(2)}`;
    const handleCart = () => {
        props.onHideCart()
    };

    // const handelPostRequest = async () => {
    //     await axios.post("https://react-foodsite-default-rtdb.europe-west1.firebasedatabase.app/orders.json", {order: order, totalAmount: totalAmount})
    // } 
    
    const cartItemRemoveHandler = (id) => {
        ctx.removeItem(id)
    };

    const activateCheckout = () => {
        setCheckout(true);
    };

    const cartItemAddHandler = (item) => {
        ctx.addItem({...item,amount: 1})
    };

    const cartItems = ctx.items.map( (item) => (
        <ul  ><CartItem price={item.price} onRemove={cartItemRemoveHandler.bind(null, item.id)} onAdd={cartItemAddHandler.bind(null, item)} name={item.name} amount={item.amount}/></ul>
    )
    );

    const cancelHandler = () => {
        setCheckout(false);
    }

    return (<Modal onClick={handleCart}>
        {cartItems}
        <div onClick={handleCart} className={classes.total}>
            <span>TotalAmount</span>
            <span>{totalAmount}</span>
        </div>
        <div className={classes.actions}>
            <button onClick={handleCart} className={classes['button--alt']}>Close</button>
            <button className={classes.button} disabled={ctx.items.length === 0} onClick={activateCheckout}>Order</button>
            {checkout && <Checkout order={ctx.items} totalAmount={totalAmount} onHandleCheckout={props.onHideCart} onCancel={cancelHandler}/>}
        </div>
    </Modal>);
}

export default Cart;
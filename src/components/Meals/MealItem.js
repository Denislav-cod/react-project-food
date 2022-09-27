import React from "react";
import { cartActions } from "../../reduxstore/cart-slice";
import { useDispatch } from "react-redux";
import classes from './MealItem.module.css'
import MealItemForm from './MealItemForm'

const MealItem = (props) => {
    const dispatch = useDispatch();

    const addToCartHandler = (amount) => {
        dispatch(cartActions.addItem({ id: props.id, name: props.name, amount: amount, price: props.price }));
    };
    return (
        <li className={classes.meal}>
            <div className={classes.name}><h3>{props.name}</h3>
                <div className={classes.description}>{props.description}</div>
                <div className={classes.price}>{props.price}</div>
            </div>
            <div><MealItemForm onAddToCart={addToCartHandler} /></div>
        </li>
    );
}

export default MealItem;
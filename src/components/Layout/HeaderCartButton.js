import React, {useContext} from "react";
import classes from './HeaderCartButton.module.css';
import CartIcon from "../Cart/CartIcon";
import CartContext from "../../store/cart.context";

const HeaderCartButton = (props) => {
    const ctx = useContext(CartContext);
    let items = 0;

    ctx.items.map(()=> (
        items++
    ))

    return (
        <button onClick={props.onClick} className={classes.button}>
            <span className={classes.icon}><CartIcon /></span>
            <span>Your Cart</span>
            <span className={classes.badge}>{items}</span>
        </button>
    );
}

export default HeaderCartButton;
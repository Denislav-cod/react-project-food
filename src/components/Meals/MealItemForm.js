import React, { useRef, useState } from "react";

import classes from "./MealItemForm.module.css";
import Input from "../UI/Input";

const MealItemForm = (props) => {
    const [error, setError] = useState(true);
    const amountInputRef = useRef();

    const submitHandler = event => {
        event.preventDefault(); 
        const enteredAmount = amountInputRef.current.value;
        const convertEnteredAmount = +enteredAmount;

        if(enteredAmount.trim().length === 0 || convertEnteredAmount < 1 || convertEnteredAmount > 5){
            setError(false);
            return; 
        }
        props.onAddToCart(convertEnteredAmount)
    };

    return (
        <form className={classes.form} onSubmit={submitHandler}>
            <Input label="Amount" ref={amountInputRef} input={{
                id: 'amount_' + props.id, // this changed!
                type: 'number',
                min: '1',
                max: '5',
                step: '1',
                defaultValue: '1'
            }} />
            <button>+ Add</button>
            {!error && <p>This is not valid amount</p>}
        </form>
    );
}

export default MealItemForm;
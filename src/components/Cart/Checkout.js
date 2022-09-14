import React, { useState } from 'react';
import axios from "axios";

import classes from './Checkout.module.css';
import Modal from '../UI/Modal';

const Checkout = (props) => {
    const [name, setName] = useState();
    const [street, setStreet] = useState();
    const [postal, setPostal] = useState();
    const [city, setCity] = useState();

    const submitData = async (event) => {
        event.preventDefault();
    }

    const nameChangeHandler = (event) => {
        setName(event.target.value);
    };
    const streetChangeHandler = (event) => {
        setStreet(event.target.value);
    };
    const postalChangeHandler = (event) => {
        setPostal(event.target.value);
    };
    const cityChangeHandler = (event) => {
        setCity(event.target.value);
    };


    return (
        <Modal>
            <form className={classes.form} onSubmit={submitData}>
                <div className={classes.control}>
                    <label htmlFor='name'>Your Name</label>
                    <input type='text' id='name' onChange={nameChangeHandler} />
                </div>
                <div className={classes.control}>
                    <label htmlFor='street'>Street</label>
                    <input type='text' id='street' onChange={streetChangeHandler} />
                </div>
                <div className={classes.control}>
                    <label htmlFor='postal'>Postal Code</label>
                    <input type='text' id='postal' onChange={postalChangeHandler} />
                </div>
                <div className={classes.control}>
                    <label htmlFor='city'>City</label>
                    <input type='text' id='city' onChange={cityChangeHandler} />
                </div>
                <div className={classes.actions}>
                    <button type='button' onClick={props.onCancel}>
                        Cancel
                    </button>
                    <button className={classes.submit}>Confirm</button>
                </div>
            </form>
        </Modal>
    );
};

export default Checkout;
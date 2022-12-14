import React from 'react';


import classes from './Checkout.module.css';
import Modal from '../UI/Modal';

const Checkout = (props) => {
    return (
        <Modal>
            <form className={classes.form} >
                <div className={classes.control}>
                    <label htmlFor='name'>Your Name</label>
                    <input type='text' id='name' />
                </div>
                <div className={classes.control}>
                    <label htmlFor='street'>Street</label>
                    <input type='text' id='street' />
                </div>
                <div className={classes.control}>
                    <label htmlFor='postal'>Postal Code</label>
                    <input type='text' id='postal' />
                </div>
                <div className={classes.control}>
                    <label htmlFor='city'>City</label>
                    <input type='text' id='city' />
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
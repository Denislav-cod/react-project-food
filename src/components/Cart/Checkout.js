import React from 'react';
import axios from "axios";
import { useForm } from 'react-hook-form';
import classes from './Checkout.module.css';
import Modal from '../UI/Modal';

const Checkout = (props) => {
    const { register, handleSubmit, resetField } = useForm();
    const confirmHandler = async (data) => {
        const completeOrder = {
            order: {
                order: props.order,
                totalAmount: props.totalAmount,
                orderInfo: data
            },
            status: "pending",

        }
        await axios.post("https://react-foodsite-default-rtdb.europe-west1.firebasedatabase.app/orders.json", { order: completeOrder });
        resetField('name');
        resetField('postal');
        resetField('street');
        resetField('city');
    }

    const handleCheckout = () => {
        props.onHandleCheckout();
    }

    return (
        <Modal onClick={handleCheckout}>
            <form className={classes.form} onSubmit={handleSubmit(confirmHandler)}>
                <div className={classes.control}>
                    <label htmlFor='name'>Your Name</label>
                    <input type='text' id='name' {...register("name", { required: true })} />
                </div>
                <div className={classes.control}>
                    <label htmlFor='street'>Street</label>
                    <input type='text' id='street' {...register("street", { required: true })} />
                </div>
                <div className={classes.control}>
                    <label htmlFor='postal'>Postal Code</label>
                    <input type='text' id='postal' {...register("postal", { required: true })} />
                </div>
                <div className={classes.control}>
                    <label htmlFor='city'>City</label>
                    <input type='text' id='city'  {...register("city", { required: true })} />
                </div>
                <div className={classes.actions}>
                    <button type='button' onClick={props.onCancel}>
                        Cancel
                    </button>
                    <button  className={classes.submit}>Confirm</button>
                </div>
            </form>
        </Modal>
    );
};

export default Checkout;
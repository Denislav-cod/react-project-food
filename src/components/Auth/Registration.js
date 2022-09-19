import { useRef } from "react";
import axios from "axios";
import Card from "../UI/Card";
import classes from "./Registration.module.css";

const Registration = () => {
    const nameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();

    const submitHandler = async (event) => {
        event.preventDefault();

        const enteredName = nameRef.current.value;
        const enteredEmail = emailRef.current.value;
        const enteredPassword = passwordRef.current.value;

        //Later add validation same as login comment;
        try {
            const response = await axios.post("http://localhost:3001/user/registration",
                {
                    name: enteredName,
                    email: enteredEmail,
                    password: enteredPassword
                }
            );
            console.log(response);
        } catch (error) {
            console.log(error);
        }

    }

    return (
        <Card className={classes.regster}>
            <section >
                <form onSubmit={submitHandler}>
                    <div className={classes.control}>
                        <label htmlFor='name'>Name</label>
                        <input type='text' id='name' ref={nameRef} />
                    </div>
                    <div className={classes.control}>
                        <label htmlFor='email'>Email</label>
                        <input type='text' id='email' ref={emailRef} />
                    </div>
                    <div className={classes.control}>
                        <label htmlFor='password'>Password</label>
                        <input type='password' id='password' ref={passwordRef} />
                    </div>
                    <div>
                        <button className={classes.button}>Registration</button>
                    </div>
                </form>
            </section>
        </Card>
    );
}

export default Registration;
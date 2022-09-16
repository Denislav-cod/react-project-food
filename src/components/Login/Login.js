import { useState, useRef } from "react";
import axios from "axios";
import Card from "../UI/Card";
import classes from "./Login.module.css";

const Login = () => {
    const [error, setError] = useState();
    const [isError, setIsError] = useState(false);
    const nameRef = useRef();
    const passwordRef = useRef();

    const submitHandler = async (event) => {
        event.preventDefault();

        const enteredName = nameRef.current.value;
        const enteredPassword = passwordRef.current.value;

        //Later add validation and maybe create one auth file with button for change registration or login;
        try {
            const response = await axios.post("http://localhost:3001/user/login",
                {
                    name: enteredName,
                    password: enteredPassword
                }
            );
            console.log(response);
        } catch (error) {
            setError(error.message)
            setIsError(true);
        }

    }

    return (
        <Card className={classes.login}>
            <section >
                {isError === true && <p>{error}</p>}
                <form onSubmit={submitHandler}>
                    <div className={classes.control}>
                        <label htmlFor='name'> Name</label>
                        <input type='text' id='name' required ref={nameRef} />
                    </div>
                    <div className={classes.control}>
                        <label htmlFor='password'>Password</label>
                        <input type='password' id='password' required ref={passwordRef} />
                    </div>
                    <div>
                        <button className={classes.button}>Login</button>
                    </div>
                </form>
            </section>
        </Card>
    );
}

export default Login;
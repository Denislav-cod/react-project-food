import { useState, useRef, useContext } from "react";
import AuthContext from '../../store/auth.contexet';
import axios from "axios";
import Card from "../UI/Card";
import classes from "./Login.module.css";

const Login = () => {
    const ctx = useContext(AuthContext);
    const [error, setError] = useState();
    const [isError, setIsError] = useState(false);
    const emailRef = useRef();
    const passwordRef = useRef();

    const submitHandler = async (event) => {
        event.preventDefault();

        const enteredEmail = emailRef.current.value;
        const enteredPassword = passwordRef.current.value;

        //Later add validation and maybe create one auth file with button for change registration or login;
        try {
            const response = await axios.post("http://localhost:3001/user/login",
                {
                    email: enteredEmail,
                    password: enteredPassword
                }
            );
            if (response.statusText === "OK") {
                const data =  response.data;
                ctx.login(data.user,data.user.token);
            }
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
                        <label htmlFor='email'> email</label>
                        <input type='text' id='email' required ref={emailRef} />
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
import Card from "../UI/Card";
import classes from "./Login.module.css"

const Login = () => {
    return (
        <Card className={classes.login}>
            <section >
                <form>
                    <div className={classes.control}>
                        <label htmlFor='name'> Name</label>
                        <input type='text' id='name' />
                    </div>
                    <div className={classes.control}>
                        <label htmlFor='password'>Password</label>
                        <input type='password' id='password' />
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
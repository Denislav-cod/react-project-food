import classes from "./Registration.module.css";
import Card from "../UI/Card";

const Registration = () => {
    return (
        <Card className={classes.regster}>
            <section >
                <form>
                    <div className={classes.control}>
                        <label htmlFor='name'>Name</label>
                        <input type='text' id='name' />
                    </div>
                    <div className={classes.control}>
                        <label htmlFor='email'>Email</label>
                        <input type='text' id='email' />
                    </div>
                    <div className={classes.control}>
                        <label htmlFor='password'>Password</label>
                        <input type='password' id='password' />
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
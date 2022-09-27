import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../../reduxstore/auth-slice";
import { Link } from "react-router-dom";
import classes from "./MainNavigation.module.css";


const MainNavigation = () => {
    const dispatch = useDispatch();
    const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
    const isAdmin = useSelector(state => state.auth.isAdmin);
    const logoutHandler = () => {
        dispatch(authActions.logoutAction());
    }
    return (
        <nav className={classes.nav}>
            <ul className={classes["nav-items"]}>
                {isLoggedIn === true &&
                    <React.Fragment>
                        {isAdmin && <li><Link to="/admin">Admin panel</Link></li>}
                        <li><Link to="/meals">Meals</Link></li>
                        <li onClick={logoutHandler}><Link to="/user/login">Logout</Link></li>
                    </React.Fragment>}
                {isLoggedIn === false &&
                    <React.Fragment>
                        <li><Link to="/user/login">Login</Link></li>
                        <li><Link to="/user/registration">Registration</Link></li>
                    </React.Fragment>}
            </ul>
        </nav>
    );
}

export default MainNavigation;
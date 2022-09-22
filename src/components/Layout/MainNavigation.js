import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import classes from "./MainNavigation.module.css";
import AuthContext from '../../store/auth.contexet';


const MainNavigation = () => {
    const ctx = useContext(AuthContext);
    const logoutHandler = () => {
        ctx.logout();
    }
    return (
        <nav className={classes.nav}>
            <ul className={classes["nav-items"]}>
                {ctx.isLoggedIn === true &&
                    <React.Fragment>
                        <li><Link to="/admin">Admin panel</Link></li>
                        <li onClick={logoutHandler}><Link to="/user/login">Logout</Link></li>
                    </React.Fragment>}
                    {ctx.isLoggedIn === false &&
                <React.Fragment>
                    <li><Link to="/user/login">Login</Link></li>
                    <li><Link to="/user/registration">Registration</Link></li>
                </React.Fragment>}
            </ul>
        </nav>
    );
}

export default MainNavigation;
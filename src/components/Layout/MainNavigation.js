import React, { useState } from "react";
import { Link } from "react-router-dom";
import classes from "./MainNavigation.module.css";

const MainNavigation = () => {
    return (
        <nav className={classes.nav}>
            <ul>
                <React.Fragment>
                    <li><Link to="/admin">Admin panel</Link></li>
                    <li><Link to="/user/login">Login</Link></li>
                    <li><Link to="/user/registration">Registration</Link></li>
                </React.Fragment>
            </ul>
        </nav>
    );
}

export default MainNavigation;
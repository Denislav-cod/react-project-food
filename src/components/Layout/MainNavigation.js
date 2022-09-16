import React, { useState } from "react";
import { Link } from "react-router-dom";
import classes from "./MainNavigation.module.css";

const MainNavigation = () => {
    const [isAdmin, setIsAdmin] = useState(true);
    const [isLggedin, setIsLoggedIn] = useState(false);
    return (
        <nav className={classes.nav}>
            <ul>
                {isLggedin &&
                    <React.Fragment>
                        {isAdmin && <li><Link to="/admin">Admin panel</Link></li>}
                    </React.Fragment>
                }
                {!isLggedin &&
                    <React.Fragment>
                        <li><Link to="/user/login">Login</Link></li>
                        <li><Link to="/user/registration">Registration</Link></li>
                    </React.Fragment>
                }
            </ul>
        </nav>
    );
}

export default MainNavigation;
import { useState } from "react";
import classes from "./MainNavigation.module.css"

const MainNavigation = () => {
    const [isAdmin, setIsAdmin] = useState(true);
    return (
        <nav className={classes.nav}>
            <ul>
                {isAdmin && <li><a>Admin panel</a></li>}
                <li><a>Login</a></li>
                <li><a>Registration</a></li>
            </ul>
        </nav>
    );
}

export default MainNavigation;
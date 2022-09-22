import React from "react";
import classes from './Header.module.css';

import mealsImage from '../../assests/meals.jpg'
import HeaderCartButton from "./HeaderCartButton";
import MainNavigation from "./MainNavigation";



const Header = (props) => {
    const handelCart = () => {
        props.onShowCart();
    }
    return (
        <React.Fragment>
            <header className={classes.header}>
                <h1>ReactMeals</h1>
                <div className={classes.navigation}>
                    <MainNavigation />
                    <HeaderCartButton onClick={handelCart} />
                </div>
            </header>
            <div className={classes['main-image']}>
                <img src={mealsImage} alt="A table of food" />
            </div>
        </React.Fragment>
    );
}

export default Header;
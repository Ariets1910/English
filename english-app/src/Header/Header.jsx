import React from "react";
import classes from "./Header.module.css"
import {NavLink} from "react-router-dom";
import flagGameLogo from "../images/flags/FlagGameLogo.jfif"
import bodyLogo from "../images/Body/body-parts-logo.png"


const Header = (props) => {
    return (
        <div className={classes.header}>
            <div className={classes.headline}>
                <h1>Funny English!!!</h1>
            </div>
            <div className={classes.navBar}>
                <div className={classes.item}>
                    <NavLink to="Flags" activeClassName={classes.active}><img src={flagGameLogo} alt=""/>Flags</NavLink>
                </div>
                <div className={classes.item}>
                    <NavLink to="Body" activeClassName={classes.active}><img src={bodyLogo} alt=""/>Body</NavLink>
                </div>

            </div>
        </div>
    )
};

export default Header


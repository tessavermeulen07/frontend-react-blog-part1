import React from "react";
import logoMedium from "../assets/logo-medium.png";
import {NavLink} from "react-router-dom";
import './Navigation.css';

function Navigation() {
    return (
        <>
            <nav className="navbar-base">
                <div className="navbar-wrapper">
                    <img src={logoMedium} alt="Logo " className="logo-img"/>
                </div>
                <ul className="navbar-list-section">
                    <li>
                        <NavLink to="/" className={({isActive}) => isActive ? 'nav-active' : 'nav-default'}>
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/alle-blogs" className={({isActive}) => isActive ? 'nav-active' : 'nav-default'}>
                            Alle blogs
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/nieuwe-post" className={({isActive}) => isActive ? 'nav-active' : 'nav-default'}>
                            Nieuwe post</NavLink>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default Navigation;
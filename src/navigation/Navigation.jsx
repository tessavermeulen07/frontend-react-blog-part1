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



// Van Yvonne, kijk even naar de navigatie manier met active
// function Navigation() {
//     return (
//         <header>
//
//             <nav>
//                 <div className="nav-container">
//                     <ul className="navbar">
//                         <img src={logo} alt="logo-medium-png"/>
//                         <li>
//                             <NavLink to={"/"} className={({isActive}) => isActive === true ? "active-menu-link" : "default-menu-link"}>Home</NavLink>
//                         </li>
//                         <li>
//                             <NavLink to={"/overview-page"} className={({isActive}) => isActive === true ? "active-menu-link" : "default-menu-link"}>Alle posts</NavLink>
//                         </li>
//                         <li>
//                             <NavLink to={"/blogposts"} className={({isActive}) => isActive === true ? "active-menu-link" : "default-menu-link"}>Nieuwe post</NavLink>
//                         </li>
//                     </ul>
//                 </div>
//             </nav>
//         </header>
//     );
// }
// export default Navigation;
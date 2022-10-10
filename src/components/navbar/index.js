import "./style.css"

import {NavLink} from "react-router-dom"

import React, {useState}   from "react";
import {useAuth} from "../../hooks/useAuth";


const Menu = () => {
    const auth = useAuth()

    const handleLogout = () => {
      auth.singOut()
    }

    const setActive = ({isActive}) => ({color: isActive ? '#66f' : ''})

    return (
        <nav className="navbar">
            <div className="container">

                <div className="navbar-header">
                    <a>
                        <h4>Q<span>SALES</span></h4>
                    </a>
                </div>

                <div className="navbar-menu">
                    <ul className="navbar-nav">
                        <NavLink>Документи</NavLink>
                        <NavLink>Маршрути</NavLink>
                        <NavLink to="/staffs" style={setActive}>Працівники</NavLink>
                        <NavLink>Товари</NavLink>
                        <NavLink to="/clients" style={setActive}>Клієнти</NavLink>
                    </ul>
                </div>

                <div className="navbar-menu">
                    <p onClick={handleLogout}>Вийти</p>
                </div>
            </div>
        </nav>
    )
};

export default Menu;
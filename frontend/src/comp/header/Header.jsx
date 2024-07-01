import React from 'react'
import { NavLink } from "react-router-dom";

import cl from '../header/Header.module.css'

const Header = () => {
    return (
        <header>
            <div className={cl.container}>
            <div className={cl.headerLeftSide}>
                <NavLink to='/'>EL</NavLink>
            </div>

            <div className={cl.headerRightSide}>
            <div className={cl.burgerMenu}>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <NavLink to='/'>Курсы</NavLink>
                <NavLink to='/vebinar'>Вебинары</NavLink>
                <NavLink to='/login'>Вход</NavLink>
            </div>
            </div>
        </header>
    )
}

export default Header


import React, { useState, useContext } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css'
import { RxHamburgerMenu } from 'react-icons/rx'
import { IoClose } from "react-icons/io5"
import LanguageContext from '../context/LanguageContext';

import LanguageSelector from './LanguageSelector';
import { translations } from '../translations/translation';




export default function Header() {
    const [active, setActive] = useState(false)
    const [language] = useContext(LanguageContext);


    const showMenu = () => {
        setActive(!active)
    }


    return (
        <header className='headerContainer'>
            <div className="topWrapper">
                <h1 className='blogName'>MEMORIES OF MAYA</h1>

                <div className='menuIcon'>
                    <RxHamburgerMenu className='menu' onClick={showMenu} />
                </div>

            </div>
            <nav className={active ? 'navbar active' : 'navbar'}>
                <div className='links'>
                    <div className='closed'>
                        <IoClose className='close' onClick={showMenu} />
                    </div>

                    <NavLink to="/" onClick={showMenu}>{translations.home[language]}</NavLink>
                    <NavLink to="/about" className='about' onClick={showMenu}>{translations.about[language]}</NavLink>
                    <NavLink to="/create" className='createPost' onClick={showMenu}>{translations.newPost[language]}</NavLink>
                    <LanguageSelector showMenu={showMenu} />

                </div>
            </nav>

            <div className='border'>
            </div>
        </header>
    )
}



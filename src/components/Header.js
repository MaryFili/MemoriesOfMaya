
import React, { useState, useContext } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css'
import { RxHamburgerMenu } from 'react-icons/rx'
import { IoClose } from "react-icons/io5"
import LanguageContext from '../context/LanguageContext';
import { home, newPost, about } from '../translations/translation'
import LanguageSelector from './LanguageSelector';




export default function Header() {
    const [active, setActive] = useState(false)
    const [language] = useContext(LanguageContext);


    const showMenu = () => {
        setActive(!active)
    }


    return (
        <header className='headerContainer'>

            <h1 className='blogName'>MEMORIES OF MAYA</h1>

            <div className='menuIcon'>
                <RxHamburgerMenu className='menu' onClick={showMenu} />
            </div>

            <nav className={active ? 'navbar active' : 'navbar'}>
                <div className='links'>
                    <div className='closed'>
                        <IoClose className='close' onClick={showMenu} />
                    </div>

                    <NavLink to="/">{home[language]}</NavLink>
                    <NavLink to="/about" className='about' >{about[language]}</NavLink>
                    <NavLink to="/create" className='createPost' >{newPost[language]}</NavLink>
                    <LanguageSelector />

                </div>
            </nav>

            <div className='border'>
            </div>
        </header>
    )
}



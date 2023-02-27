
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css'
import { RxHamburgerMenu } from 'react-icons/rx'
import { IoClose } from "react-icons/io5"


export default function Header() {
    const [active, setActive] = useState(false)

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
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/about" className='about' >About</NavLink>
                    <NavLink to="/create" className='createPost' >New Post</NavLink>
                </div>
            </nav>

            <div className='border'>
            </div>
        </header>
    )
}

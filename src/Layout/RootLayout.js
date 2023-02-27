import React from 'react'
import styles from '../components/Navbar.module.css'
import { NavLink, Outlet } from 'react-router-dom'

export default function RootLayout() {
    return (
        <div className={styles.rootLayout}>
            <header className={styles.container}>
                <nav className={styles.navbar}>
                    <h1>Memories of Maya</h1>
                    <div className={styles.links}>
                        <NavLink to="/">Home</NavLink>
                        <NavLink to="/create" className={styles.about} >About</NavLink>
                        <NavLink to="/create" className={styles.createPost} >New Post</NavLink>
                    </div>
                </nav>
                <div className={styles.border}>

                </div>
            </header>
            <main>
                <Outlet />
            </main>
        </div>
    )
}

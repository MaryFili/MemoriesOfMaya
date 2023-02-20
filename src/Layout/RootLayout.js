import React from 'react'
import styles from '../components/Navbar.module.css'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header'

export default function RootLayout() {
    return (
        <div className={styles.rootLayout}>
            <Header />
            <main>
                <Outlet />
            </main>
        </div>
    )
}

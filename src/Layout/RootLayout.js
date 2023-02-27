import React from 'react'
import styles from '../components/Navbar.module.css'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'

export default function RootLayout() {
    return (
        <div className={styles.rootLayout}>
            <Header />
            <div className={styles.mainDisplay}>
                <main>
                    <Outlet />
                </main>

            </div>
        </div>
    )
}

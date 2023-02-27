import React from 'react'

import { Outlet } from 'react-router-dom'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar';
import styles from './RootLayout.module.css'

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

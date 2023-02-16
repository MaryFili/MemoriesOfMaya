import React, { useState, useContext } from 'react'
import styles from '../components/Navbar.module.css'
import { NavLink, Outlet } from 'react-router-dom'
import LanguageContext from '../context/LanguageContext'

export default function RootLayout() {
    const [selectedLanguage, setSelectedLanguage] = useState('english')

    return (
        <LanguageContext.Provider value={selectedLanguage}>
            <div className={styles.rootLayout}>
                <header className={styles.container}>
                    <nav className={styles.navbar}>
                        <h1>Memories of Maya</h1>
                        <div className={styles.links}>
                            <NavLink to="/">Home</NavLink>
                            <NavLink to="/about" className={styles.about} >About</NavLink>
                            <NavLink to="/create" className={styles.createPost} >Nuevo Post</NavLink>
                            <select className={styles.languageSelector} name="selectedLanguage" onChange={e => setSelectedLanguage(e.target.value)}>
                                <option value="english">🇬🇧</option>
                                <option value="español">🇪🇸</option>
                                <option value="italiano">🇮🇹</option>
                            </select>
                        </div>
                    </nav>
                </header>
                <main>
                    <Outlet />
                </main>
            </div>
        </LanguageContext.Provider>
    )
}

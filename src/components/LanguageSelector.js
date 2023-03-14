import React, { useContext } from 'react';
import styles from './LanguageSelector.module.css'



import LanguageContext from '../context/LanguageContext';

export default function LanguageSelector({ showMenu }) {
    const [language, setLanguage] = useContext(LanguageContext);

    return (
        <div >
            <label>
                <select className={styles.languageSelector} value={language} onChange={(e) => setLanguage(e.target.value)} onClick={showMenu}>
                    {/* <select className={styles.languageSelector} value={language} onChange={(e) => setLanguage(e.target.value)}> */}

                    <option value='en'>🇬🇧 </option>
                    <option value='it'>🇮🇹 </option>
                    <option value='es'>🇪🇸 </option>
                </select>
            </label>

        </div>
    );
}
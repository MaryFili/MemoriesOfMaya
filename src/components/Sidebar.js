import React, { useContext } from 'react';

import LanguageContext from '../context/LanguageContext';

export default function Sidebar() {
    const [language, setLanguage] = useContext(LanguageContext);

    return (
        <aside>
            <div className='languageSelector'>
                <label>
                    Please select your language:
                    <select value={language} onChange={(e) => setLanguage(e.target.value)}>
                        <option value='en'>🇬🇧 English</option>
                        <option value='es'>🇪🇸 Español</option>
                        <option value='it'>🇮🇹 Italiano</option>
                    </select>
                </label>
            </div>
        </aside>
    );
}
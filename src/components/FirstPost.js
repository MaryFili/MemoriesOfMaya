import React, { useContext } from 'react'
import styles from '../pages/Home.module.css'
import maya from '../images/maya1.jpg';
import { translations } from '../translations/translation';
import LanguageContext from '../context/LanguageContext';


export default function FirstPost() {
    const [language] = useContext(LanguageContext);
    return (
        <div className={styles.blogPreview}>

            <h2 className={styles.blogTitle}>{translations.firstPostTitle[language]}</h2>
            <img className={styles.blogFirstImage} src={maya} alt="black and white portrait" />

            <p className={styles.blogContent}>{translations.firstPostContent1[language]}</p>
            <p className={styles.blogContent}>{translations.firstPostContent2[language]}</p>
            <p className={styles.blogContent}>{translations.firstPostContent3[language]}</p>
            <p className={styles.blogContent}>{translations.firstPostContent4[language]}</p>

            <p className={styles.blogAuthor}></p>
        </div>
    )
}

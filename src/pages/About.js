import { useContext } from 'react';
import styles from './Home.module.css';
import { translations } from '../translations/translation';
import LanguageContext from '../context/LanguageContext';
import pic from '../images/mayaandme.JPG'


const About = () => {
    const [language] = useContext(LanguageContext);


    return (

        <div className={styles.content}>
            <div className={styles.home}>
                <div className={styles.blogPreview}>
                    <h2 className={styles.blogTitle}>{translations.aboutTitle[language]}</h2>
                    <p className={styles.blogContent}>{translations.aboutParragraph1[language]}</p>
                    <p className={styles.blogContent}>{translations.aboutParragraph2[language]}</p>
                    <p className={styles.blogContent}>{translations.aboutParragraph3[language]}</p>

                    <img className={styles.blogFirstImage} src={pic} alt="portrait of maya and me" />


                </div>

            </div>
        </div>
    );
}

export default About;
// import styles from './Home.module.css'
// import BlogList from '../components/BlogList';
// import FirstPost from '../components/FirstPost';
// import { useCollection } from '../hooks/useCollection'
// import { useContext } from 'react';
// import { query, where } from 'firebase/firestore'
// import LanguageContext from '../context/LanguageContext';



// const Home = () => {
//     const [language, setLanguage] = useContext(LanguageContext);

//     const { documents: blogs } = useCollection('Blogs', (ref) => query(ref, where('language', '==', language)))



//     return (
//         <main>
//             <div className={styles.content}>
//                 <div className={styles.home}>
//                     <div className={styles.blogPreview}>
//                         <FirstPost />
//                         {blogs && <BlogList blogs={blogs} />}
//                         {/* {isPending && <p>Loading...</p>}
//                     {error && <p>{error}</p>} */}
//                     </div>
//                 </div>
//             </div>
//         </main>
//     );
// }

// export default Home;

import styles from './Home.module.css';
import BlogList from '../components/BlogList';
import FirstPost from '../components/FirstPost';
import useBlogs from '../hooks/useBlogs';
import { useContext } from 'react';
import LanguageContext from '../context/LanguageContext';

const Home = () => {
    const [language] = useContext(LanguageContext);
    const { blogs, loading } = useBlogs(language);

    return (

        <main className={styles.content}>
            <div className={styles.home}>
                <FirstPost />
                {loading
                    ? (<p>Loading...</p>)
                    : (<BlogList blogs={blogs} />)}
            </div>
        </main>

    );
};

export default Home;

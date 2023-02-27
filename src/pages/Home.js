import styles from './Home.module.css'
import BlogList from '../components/BlogList';
import FirstPost from '../components/FirstPost';
import { useCollection } from '../hooks/useCollection'


const Home = () => {
    const { documents: blogs } = useCollection('Blogs')

    return (

        <div className={styles.content}>
            <div className={styles.home}>
                <div className={styles.blogPreview}>
                    <FirstPost />
                    {blogs && <BlogList blogs={blogs} />}
                    {/* {isPending && <p>Loading...</p>}
                    {error && <p>{error}</p>} */}
                </div>
            </div>
        </div>
    );
}

export default Home;
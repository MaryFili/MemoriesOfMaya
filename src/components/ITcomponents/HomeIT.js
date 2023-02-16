import styles from '../Home.module.css'
import BlogList from '../BlogList';
import useFetch from '../useFetch';


const Home = () => {
    const { resources: blogs, isPending, error } = useFetch(' http://localhost:8000/blogsITA')

    return (

        <div className={styles.content}>
            <div className={styles.home}>
                <h2 className={styles.blogTitle}>Due parole sul perche di questo blog</h2>
                <p className={styles.blogContent}>...coming soon</p>
                <p className={styles.blogAuthor}>Scritto da mary</p>

                {blogs && <BlogList blogs={blogs} />}
                <div className={styles.home}>
                    {isPending && <p>Loading...</p>}
                    {error && <p>{error}</p>}
                    {blogs && <BlogList blogs={blogs} />}

                </div>
            </div>
        </div>
    );
}

export default Home;
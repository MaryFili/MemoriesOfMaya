import styles from './Home.module.css'
import BlogList from './BlogList';
import useFetch from './useFetch';


const Home = () => {
    const { resources: blogs, isPending, error } = useFetch(' http://localhost:8000/blogs')

    return (

        <div className={styles.content}>
            <div className={styles.home}>
                <div className={styles.blogPreview}>
                    <h2 className={styles.blogTitle}>What's the reason behind this blog</h2>
                    <p className={styles.blogContent}>...coming soon</p>
                    <p className={styles.blogAuthor}>Written by mary</p>
                </div>
                {blogs && <BlogList blogs={blogs} />}
                {isPending && <p>Loading...</p>}
                {error && <p>{error}</p>}
            </div>
        </div>
    );
}

export default Home;
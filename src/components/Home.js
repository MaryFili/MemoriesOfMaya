import styles from './Home.module.css'
import { useState, useEffect } from 'react'
import BlogList from './BlogList';
import useFetch from './useFetch';


const Home = () => {
    const { resources: blogs, isPending, error } = useFetch(' http://localhost:8000/blogs')




    return (

        <div className={styles.content}>
            <div className={styles.home}>
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
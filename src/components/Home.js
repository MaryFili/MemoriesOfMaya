import styles from './Home.module.css'

import { useState, useEffect } from 'react'
import BlogList from './BlogList';
import useFetch from './useFetch';


const Home = () => {
    const { resources: blogs, isPending, error } = useFetch(' http://localhost:8000/blogs')

    return (

        <div className={styles.content}>
            <div className={styles.home}>
                <h2 className={styles.blogTitle}>What's the idea behind this blog</h2>
                <p className={styles.blogContent}>...coming soon</p>
                <p className={styles.blogAuthor}>Written by mary</p>

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
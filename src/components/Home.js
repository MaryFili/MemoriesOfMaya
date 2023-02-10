import styles from './Home.module.css'
import { useState, useEffect } from 'react'
import BlogList from './BlogList';
import useFetch from './useFetch';


const Home = () => {
    const { resources: blogs, isPending, error } = useFetch(' http://localhost:8000/blogs')




    return (
        <div className={styles.home}>
            {isPending && <p>Loading...</p>}
            {error && <p>{error}</p>}
            {blogs && <BlogList blogs={blogs} />}

        </div>
    );
}

export default Home;
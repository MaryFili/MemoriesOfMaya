import styles from './Home.module.css'
import { useState, useEffect } from 'react'
import BlogList from './BlogList';


const Home = () => {
    const [blogs, setBlogs] = useState(null)


    useEffect(() => {
        fetch("http://localhost:8000/blogs")
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setBlogs(data)
            })
    }, [])


    return (
        <div className={styles.content}>
            <div className={styles.home}>
                {blogs && <BlogList blogs={blogs} />}

            </div>
        </div>
    );
}

export default Home;
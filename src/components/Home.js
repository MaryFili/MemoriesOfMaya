import styles from './Home.module.css'

import { useState } from 'react'
import BlogList from './BlogList';

const Home = () => {
    const [blogs, setBlogs] = useState([
        { title: "What's the idea behind this?", body: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit quidem voluptates sunt expedita. Quasi dolorem ex ipsam ea culpa voluptatibus recusandae voluptas enim facere! Sapiente harum alias magnam nulla cumque aperiam in adipisci eveniet dolore modi! Magni, explicabo veniam sint inventore repellendus facilis ducimus dolores necessitatibus id perferendis, obcaecati consectetur!", author: "mary", id: 1 },
        { title: "Who am i?", body: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit quidem voluptates sunt expedita. Quasi dolorem ex ipsam ea culpa voluptatibus recusandae voluptas enim facere! Sapiente harum alias magnam nulla cumque aperiam in adipisci eveniet dolore modi! Magni, explicabo veniam sint inventore repellendus facilis ducimus dolores necessitatibus id perferendis, obcaecati consectetur!", author: "mary", id: 2 },
        { title: "What else could i say?", body: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit quidem voluptates sunt expedita. Quasi dolorem ex ipsam ea culpa voluptatibus recusandae voluptas enim facere! Sapiente harum alias magnam nulla cumque aperiam in adipisci eveniet dolore modi! Magni, explicabo veniam sint inventore repellendus facilis ducimus dolores necessitatibus id perferendis, obcaecati consectetur!", author: "mary", id: 3 },
    ])




    return (
        <div className={styles.home}>
            <BlogList blogs={blogs} />

        </div>
    );
}

export default Home;
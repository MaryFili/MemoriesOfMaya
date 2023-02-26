// import styles from './Bloglist.module.css'
// import styles from '../pages/Home.module.css'

// const BlogList = ({ blogs }) => {
//     return (
//         <div className={styles.blogList}>
//             {blogs.map(blog => (
//                 <div className={styles.blogPreview} key={blog.id}>
//                     <h2 className={styles.blogTitle}>{blog.title}</h2>
//                     <p className={styles.date}>Added on {blog.date}</p>
//                     {blog.imageURL && <img src={blog.imageURL} alt="Blog post" />}
//                     <p className={styles.blogContent}>{blog.body}</p>
//                     <p className={styles.blogAuthor}>Written by {blog.author}</p>
//                 </div>
//             ))}

//         </div>
//     )

// }
// export default BlogList;

import { NavLink } from 'react-router-dom';
import styles from '../pages/Home.module.css'
// import styles from './Bloglist.module.css'


const BlogList = ({ blogs }) => {
    return (
        <div className={styles.blogList}>
            {blogs.map(blog => (
                <div className={styles.blogPreview} key={blog.id}>
                    <h2 className={styles.blogTitle}>{blog.title}</h2>
                    <p className={styles.date}>📅: {blog.date}</p>
                    {blog.image && (
                        <img
                            className={styles.blogImage}
                            src={blog.image}
                            alt="Blog post"
                        />
                    )}
                    <p className={styles.blogContent}>{blog.body.substring(0, 150)}...</p>
                    <NavLink to={`/posts/${blog.id}`}>Read More</NavLink>
                    <p className={styles.blogAuthor}>Written by {blog.author}</p>
                </div>
            ))}
        </div>
    );
};

export default BlogList;
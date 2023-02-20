// import styles from './Bloglist.module.css'
import styles from './Home.module.css'

const BlogList = ({ blogs }) => {
    return (
        <div className={styles.blogList}>
            {blogs.map(blog => (
                <div className={styles.blogPreview} key={blog.id}>
                    <h2 className={styles.blogTitle}>{blog.title}</h2>
                    <p className={styles.date}>Added on {blog.date}</p>
                    <p className={styles.blogContent}>{blog.body}</p>
                    <p className={styles.blogAuthor}>Written by {blog.author}</p>
                </div>
            ))}

        </div>
    )

}
export default BlogList;
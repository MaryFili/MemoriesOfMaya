
import { useParams } from 'react-router-dom';
import useCollection from '../hooks/useCollection';
import styles from '../pages/Posts.module.css';



const Posts = () => {


    let params = useParams();
    const { error, blogs } = useCollection()
    console.log(blogs)
    console.log(params.blogId);

    const getPosts = function (id) {
        const post = blogs.find(blog => blog.id === id);
        return post ? post : undefined;
    };

    const post = getPosts(params.blogId)

    console.log(post);

    return (
        <div>   {error && <p> {error}</p>}

            {post && (
                <main className={styles.mainPostContainer}>

                    <div className={styles.postContainer} key={post.id}>
                        <h2 className={styles.blogTitle}>{post.title}</h2>
                        <div className={styles.nameAndDate}>
                            <h4 className={styles.date}>📅 {post.date}</h4>
                            <h4 className={styles.blogAuthor}>Written by {post.author}</h4>
                        </div>
                        {post.image && <img className={styles.blogImage} src={post.image} alt="Blog post" />}
                        <p className={styles.blogContent}>{post.body}</p>
                    </div>
                </main>
            )
            }
        </div >
    );
};

export default Posts;
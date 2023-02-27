import styles from './Home.module.css'


const About = () => {


    return (

        <div className={styles.content}>
            <div className={styles.home}>
                <div className={styles.blogPreview}>
                    <h2 className={styles.blogTitle}>What's the reason behind this blog</h2>
                    <p className={styles.blogContent}>...coming soon</p>
                    <p className={styles.blogAuthor}>Written by mary</p>

                </div>

            </div>
        </div>
    );
}

export default About;
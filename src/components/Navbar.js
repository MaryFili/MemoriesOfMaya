
import styles from './Navbar.module.css'

const Navbar = () => {
    return (
        <div className={styles.container}>
            <nav className={styles.navbar}>
                <h1>Memories of Maya</h1>
                <div className={styles.links}>
                    <a href="/">Home</a>
                    <a className={styles.createPost} href="/create">New Post</a>
                </div>

            </nav>
        </div>
    );
}

export default Navbar;
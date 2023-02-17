import styles from './Create.module.css'

const Create = () => {
    return (
        <div className={styles.container}>
            <h2>Add a New Post</h2>
            <form >

                <input className={styles.title}
                    type="text"
                    required
                    placeholder='Title'

                />

                <textarea
                    required
                    placeholder='Write your post here'

                ></textarea>

                <input className={styles.author}
                    type="text"
                    required
                    placeholder='Author'
                />
                <label>Choose Language</label>
                <select className={styles.language}>
                    <option value="en">English</option>
                    <option value="it">Italian</option>
                    <option value="es">Spanish</option>
                </select>
                <button>Add Post</button>
            </form>
        </div>
    )
}

export default Create;
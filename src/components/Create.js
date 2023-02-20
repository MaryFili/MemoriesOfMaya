import styles from './Create.module.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

//firebase imports
import { db } from '../firebase/config'
import { collection, addDoc } from 'firebase/firestore'

const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('');
    const [language, setLanguage] = useState('en');
    const [isPending, setIsPending] = useState(false);
    const history = useNavigate();
    const date = new Date().toLocaleDateString('de-DE') + "";

    const handleSubmit = (e) => {
        e.preventDefault();

        setIsPending(true);

        const ref = collection(db, 'Blogs')

        addDoc(ref, {
            title: title,
            body: body,
            author: author,
            language: language,
            date: date

        }).then(() => {
            setIsPending(false);
            history('/')
        })
    }



    return (
        <div className={styles.container}>
            <h2>Add a New Post</h2>
            <form onSubmit={handleSubmit}>
                <input
                    className={styles.title}
                    type="text"
                    required
                    placeholder='Title'
                    value={title}
                    onChange={(e) => { setTitle(e.target.value) }}
                />

                <textarea
                    required
                    placeholder='Write your post here'
                    value={body}
                    onChange={(e) => { setBody(e.target.value) }}

                ></textarea>

                <input
                    className={styles.author}
                    type="text"
                    required
                    placeholder='Author'
                    value={author}
                    onChange={(e) => { setAuthor(e.target.value) }}
                />

                <label>Choose Language</label>

                <select
                    className={styles.language}
                    value={language}
                    onChange={(e) => setLanguage(e.target.value)}
                >
                    <option value="en">English</option>
                    <option value="it">Italian</option>
                    <option value="es">Spanish</option>
                </select>
                {!isPending && <button>Add Post</button>}
                {isPending && <button disabled>Adding Post...</button>}
            </form>
        </div>
    )
}

export default Create;
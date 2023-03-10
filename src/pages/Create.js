// import styles from './Create.module.css';
// import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// //firebase imports
// import { db } from '../firebase/config'
// import { collection, addDoc } from 'firebase/firestore'

// const Create = () => {
//     const [title, setTitle] = useState('');
//     const [body, setBody] = useState('');
//     const [author, setAuthor] = useState('');
//     const [language, setLanguage] = useState('en');
//     const [isPending, setIsPending] = useState(false);
//     const history = useNavigate();
//     const date = new Date().toLocaleDateString('de-DE') + "";

//     const handleSubmit = (e) => {
//         e.preventDefault();

//         setIsPending(true);

//         const ref = collection(db, 'Blogs')

//         addDoc(ref, {
//             title: title,
//             body: body,
//             author: author,
//             language: language,
//             date: date

//         }).then(() => {
//             setIsPending(false);
//             history('/')
//         })
//     }



//     return (
//         <div className={styles.container}>
//             <h2>Add a New Post</h2>
//             <form onSubmit={handleSubmit}>
//                 <input
//                     className={styles.title}
//                     type="text"
//                     required
//                     placeholder='Title'
//                     value={title}
//                     onChange={(e) => { setTitle(e.target.value) }}
//                 />

//                 <textarea
//                     required
//                     placeholder='Write your post here'
//                     value={body}
//                     onChange={(e) => { setBody(e.target.value) }}

//                 ></textarea>

//                 <input
//                     className={styles.author}
//                     type="text"
//                     required
//                     placeholder='Author'
//                     value={author}
//                     onChange={(e) => { setAuthor(e.target.value) }}
//                 />

//                 <label>Choose Language</label>

//                 <select
//                     className={styles.language}
//                     value={language}
//                     onChange={(e) => setLanguage(e.target.value)}
//                 >
//                     <option value="en">English</option>
//                     <option value="it">Italian</option>
//                     <option value="es">Spanish</option>
//                 </select>
//                 {!isPending && <button>Add Post</button>}
//                 {isPending && <button disabled>Adding Post...</button>}
//             </form>
//         </div>
//     )
// }

// export default Create;




///with image upload
import styles from './Create.module.css';
import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { collection, addDoc } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { db, storage } from '../firebase/config';
import LanguageContext from '../context/LanguageContext';
import { translations } from '../translations/translation';

const Create = () => {

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('');
    const [postLanguage, setPostLanguage] = useState('en');
    const [isPending, setIsPending] = useState(false);
    const [file, setFile] = useState(null);
    const [fileUrl, setFileUrl] = useState(null);
    const navigate = useNavigate();
    const date = new Date().toLocaleDateString('de-DE') + '';
    const [language] = useContext(LanguageContext);
    const [fileError, setFileError] = useState(null)
    const [showModal, setShowModal] = useState(false)



    const handleFileChange = (e) => {
        const selectedFile = e.target.files[0];
        if (selectedFile) {
            const allowedTypes = ['image/jpeg', 'image/png', 'image/jpg'];
            const maxSize = 3 * 1024 * 1024; // 3MB
            if (allowedTypes.includes(selectedFile.type) && selectedFile.size <= maxSize) {
                setFile(selectedFile);
                setFileError(null);
                // Upload the file to Firebase Storage and get the download URL
                const fileRef = ref(storage, `images/${selectedFile.name}`);
                uploadBytes(fileRef, selectedFile)
                    .then(() => {
                        getDownloadURL(fileRef)
                            .then((url) => {
                                setFileUrl(url);
                            })
                            .catch((error) => {
                                console.error(error);
                            });
                    })
                    .catch((error) => {
                        console.error(error);
                    });
            } else {
                setFileError('Please choose a PNG or JPEG image file that is no larger than 3MB');
                alert('Please choose a PNG or JPEG image file that is no larger than 3MB')
                setShowModal(true);
                setFile(null);

            }
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsPending(true);


        const blogRef = collection(db, 'Blogs');
        await addDoc(blogRef, {
            title: title,
            body: body,
            author: author,
            language: language,
            date: date,
            image: fileUrl,
        });

        setIsPending(false);
        navigate('/');
    };

    return (
        <div className={styles.container}>
            <h2>{translations.addPost[language]}</h2>
            <form onSubmit={handleSubmit}>
                <input
                    className={styles.title}
                    type="text"
                    required
                    placeholder={translations.postTitle[language]}
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />

                <textarea
                    required
                    placeholder={translations.writePost[language]}
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                ></textarea>

                <input
                    className={styles.author}
                    type="text"
                    required
                    placeholder={translations.postAuthor[language]}
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                />

                {/* <label>{translations.selectLanguage[language]}</label>

                <select
                    className={styles.language}
                    value={postLanguage}
                    onChange={(e) => setPostLanguage(e.target.value)}
                >
                    <option value="en">{translations.english[language]}</option>
                    <option value="it">{translations.italian[language]}</option>
                    <option value="es">{translations.spanish[language]}</option>
                </select> */}

                <label>{translations.imagine[language]}</label>
                <input className={styles.author} type="file" onChange={handleFileChange} />

                {!isPending && <button>{translations.addPost[language]}</button>}
                {isPending && <button disabled>{translations.addingPost[language]} + "..."</button>}
            </form>
            {/* {showModal && (
                <div className={styles.modal}>
                    <p>{fileError}</p>
                    <button onClick={() => setShowModal(false)}>Close</button>
                </div>)} */}
        </div>
    );
};

export default Create;
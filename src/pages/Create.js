



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
    const [postLanguage, setPostLanguage] = useState(null);
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
            language: postLanguage,
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

                {/* <label>{translations.selectLanguage[language]} *</label> */}

                <select
                    className={styles.language}
                    required
                    value={postLanguage}
                    onChange={(e) => setPostLanguage(e.target.value)}
                >
                    <option disabled selected value> {translations.selectLanguage[language]}</option>
                    <option required value="en">{translations.english[language]}</option>
                    <option required value="it">{translations.italian[language]}</option>
                    <option required value="es">{translations.spanish[language]}</option>
                </select>

                <label className={styles.uploadImg}>{translations.imagine[language]}
                    <input type="file" onChange={handleFileChange} />
                </label>
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
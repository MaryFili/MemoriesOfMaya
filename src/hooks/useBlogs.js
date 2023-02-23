import { useEffect, useState } from 'react';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { db } from '../firebase/config'


// const useBlogs = (language) => {
//     const [blogs, setBlogs] = useState([]);
//     const [loading, setLoading] = useState(true);


//     useEffect(() => {
//         const getBlogs = async () => {
//             try {
//                 setLoading(true);
//                 const blogsCollection = collection(db, 'Blogs');
//                 const q = query(blogsCollection, where('language', '==', language));
//                 console.log('before fetching blogs');
//                 const querySnapshot = await getDocs(q);
//                 console.log('after fetching blogs');
//                 const fetchedBlogs = querySnapshot.docs.map((doc) => {
//                     return { id: doc.id, ...doc.data() };
//                 });
//                 setBlogs(fetchedBlogs);
//                 setLoading(false);
//             } catch (error) {
//                 console.error(error);
//             }
//         };
//         getBlogs();
//     }, [language]);

//     return { blogs, loading };
// };




// with image

const useBlogs = (language) => {
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getBlogs = async () => {
            try {
                setLoading(true);
                const blogsCollection = collection(db, 'Blogs');
                const q = query(blogsCollection, where('language', '==', language));
                const querySnapshot = await getDocs(q);
                const fetchedBlogs = querySnapshot.docs.map((doc) => {
                    return { id: doc.id, ...doc.data() };
                });
                setBlogs(fetchedBlogs);
                setLoading(false);
            } catch (error) {
                console.error(error);
            }
        };
        getBlogs();
    }, [language]);

    return {
        blogs: blogs.map(blog => ({
            ...blog,
            image: blog.image || null, // ensure that the imageURL property exists
        })),
        loading,
    };
};
export default useBlogs;
import { useState, useEffect } from 'react'
import { db } from '../firebase/config'

//firebase imports
import { collection, onSnapshot } from 'firebase/firestore'

export const useCollection = (c) => {
    const [documents, setDocuments] = useState(null);

    useEffect(() => {
        let ref = collection(db, c); //c stands for collection from where we want to get the data(in my case it will be Blogs). in this way this hooks is reusable

        const unsub = onSnapshot(ref, (snapshot) => {
            let results = [];
            snapshot.docs.forEach(doc => {
                results.push({ ...doc.data(), id: doc.id })
            })
            setDocuments(results)
        });
        return () => unsub()//this is the cleanup function so that we unsubscribe from this real-time data when the component umount

    }, [c])//we pass the collection as a dependency, so if the collection get updated, then the function will re-run

    return { documents }

}
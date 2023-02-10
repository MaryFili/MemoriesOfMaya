import { useState, useEffect } from 'react';

const useFetch = (url) => {

    const [resources, setResources] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null)

    useEffect(() => {
        fetch(url)
            .then(res => {
                if (!res.ok) {
                    throw Error('Could not fetch data')
                }
                return res.json()
            })
            .then(data => {
                console.log(data)
                setResources(data)
                setIsPending(false)
                setError(false) //important otherwise the error message will be displayed
            })
            .catch(err => {
                setError(err.message)
                setIsPending(false)//useful for not showing the Loading...
            })
    }, [url])


    return { resources, isPending, error }
}

export default useFetch;
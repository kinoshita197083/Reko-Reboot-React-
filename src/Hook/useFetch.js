import { useEffect } from 'react';

const useFetch = async (url) => {
    const [data, setData] = useState(null)
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)

    useEffect(() => ({
        async function() {
            try {
                setLoading(true);
                const response = await fetch(url);
                setData(response);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        }
    })(), [url])

    return { data, error, loading }
};

export default useFetch;
import { useEffect, useState } from "react";

const useGetMovieList = (url) => {
    const [movies, setMovies] = useState(null);
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        const abrotControllar = new AbortController();
        fetch(url, { signal: abrotControllar.signal })
        .then((res) => {
            if (!res.ok) {
                throw Error('Could not load content');
            }
            return res.json()
        })
        .then((data) => {
            setMovies(data);
            setLoading(false);
        })
        .catch((err) => {
            if(err.name === 'AbortError'){
                console.log('Abort err');
              }else{
                // setError(e.message);
                // setLoading(false);
              }
        })
        return () => abrotControllar.abort();
    }, [url]);

    return {movies, isLoading}
}
export default useGetMovieList;
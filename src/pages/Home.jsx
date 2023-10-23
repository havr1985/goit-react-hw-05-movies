import { fetchTrandingList } from "components/Api";
import { useEffect, useState } from "react";

export const Home = () => {
    const [ movies, setMovies ] = useState([]);
    const [ loading, setLoading ] = useState(false);
    const [ error, setError ] = useState(false);

    useEffect(() => {
        async function getMoviesLIst() {
            try {
                setLoading(true);
                setError(false);
                const moviesList = await fetchTrandingList();
                setMovies( [...moviesList])
                console.log(movies)
            } catch (error) {
                setError(error)
            } finally {
                setLoading(false)
            }
        }
        getMoviesLIst();
    },[])




    return (
        <div>Home</div>
    )
}
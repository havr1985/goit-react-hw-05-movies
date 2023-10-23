import { fetchTrandingList } from "components/Api";
import { MoviesList } from "components/MoviesList";
import { useEffect, useState } from "react";

export const Home = () => {
    const [ movies, setMovies ] = useState([]);
    const [ loading, setLoading ] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        async function getMoviesLIst() {
            try {
                setLoading(true);
                setError(false);
                const moviesData = await fetchTrandingList();
                setMovies(moviesData);
            } catch (error) {
                setError(true)
            } finally {
                setLoading(false)
            }
        }
        getMoviesLIst();
    }, []);


    return (
        <main>
            {loading && ("Loading...")};
            {error && ("ERROR")};
            <MoviesList movies={movies} />
        </main>
        
    )
}
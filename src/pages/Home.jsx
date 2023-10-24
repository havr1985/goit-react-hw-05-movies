import { fetchTrandingList } from "Api";
import { MoviesList } from "components/MoviesList/MoviesList";
import { useEffect, useState } from "react";
import { LoadMore } from "components/LoadMore/LoadMore";

export const Home = () => {
    const [movies, setMovies] = useState([]);
    const [page, setPage] = useState(1);
    const [ loading, setLoading ] = useState(false);
    const [error, setError] = useState(false);

    const handleLoadMore = () => {
        setPage(prevState => prevState + 1);
    };

    useEffect(() => {
        async function getMoviesLIst() {
            try {
                setLoading(true);
                setError(false);
                const moviesData = await fetchTrandingList(page);
                setMovies(prevState => ([...prevState, ...moviesData]));
            } catch (error) {
                setError(true)
            } finally {
                setLoading(false)
            }
        }
        getMoviesLIst();
    }, [page]);


    return (
        <main>
            {loading && ("Loading...")}
            {error && ("ERROR")}
            <MoviesList movies={movies} />
            {movies.length > 0 && <LoadMore onClick={handleLoadMore} />}
        </main>
        
    )
}
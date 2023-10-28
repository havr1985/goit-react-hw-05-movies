import { fetchTrandingList } from "Api";
import { MoviesList } from "components/MoviesList/MoviesList";
import { useEffect, useState } from "react";
import { LoadMore } from "components/LoadMore/LoadMore";
import { ErrorMsg } from "components/ErrorMessage/ErrorMessage";
 
export default function Home() {
    const [movies, setMovies] = useState([]);
    const [page, setPage] = useState(1);
    const [error, setError] = useState(false);

    const handleLoadMore = () => {
        setPage(prevState => prevState + 1);
    };

    useEffect(() => {
        const controller = new AbortController();
        const options = {
        headers: {
        accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNjcxYWI2NDE1ZTQzMmI4NzliOWYyZGExZmVmNzMzNiIsInN1YiI6IjY0ZjczOTllZmZjOWRlMDBhYzRmMTg5MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.KxoO5UBzcSO6Jwoana0Pbke2nBChrIK0Dhb7VVA5Bbw'
            },
            signal: controller.signal
        };

        async function getMoviesLIst() {
            try {
                setError(false);
                const moviesData = await fetchTrandingList(page, options);
                setMovies(prevState => ([...prevState, ...moviesData]));
            } catch (error) {
                if (error.code !== 'ERR_CANCELED') {
                    setError(true);
                };
            }
        };
        getMoviesLIst();
        return () => {
            controller.abort();
        }
    }, [page]);

    return (
        <main>
            {error && (<ErrorMsg />)}
            <MoviesList movies={movies} />
            {movies.length > 0 && <LoadMore onClick={handleLoadMore} />}
        </main>
    );
};
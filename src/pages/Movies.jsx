import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchSearchList } from "Api";
import { SearchBar } from "components/SearchBar/SearchBar";
import { MoviesList } from "components/MoviesList/MoviesList";
import { LoadMore } from "components/LoadMore/LoadMore";

export default function Movies() {
    const [searchParams, setSearchParams] = useSearchParams();
    const movieName = searchParams.get("name") ?? "";
    const [movies, setMovies] = useState([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading ] = useState(false);
    const [error, setError] = useState(false);

    const handleSubmit = value => {
        setSearchParams({ name: value });
        setMovies([]);
        setPage(1);
    };

    const handleLoadMore = () => {
        setPage(prevState => prevState + 1);
    };

    useEffect(() => {
        if (movieName === "") return;
        const controller = new AbortController();
        const options = {
        headers: {
        accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNjcxYWI2NDE1ZTQzMmI4NzliOWYyZGExZmVmNzMzNiIsInN1YiI6IjY0ZjczOTllZmZjOWRlMDBhYzRmMTg5MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.KxoO5UBzcSO6Jwoana0Pbke2nBChrIK0Dhb7VVA5Bbw'
            },
            signal: controller.signal
        };
        
        async function getSearchMovies() {
            try {
                setLoading(true);
                setError(false);
                const moviesData = await fetchSearchList(movieName, page, options);
                setMovies(prevState => [...prevState, ...moviesData]);
                
            } catch (error) {
                if (error.code !== 'ERR_CANCELED') {
                    setError(true);
                };
            } finally {
                setLoading(false)
            }
        };
        getSearchMovies();
        return () => {
            controller.abort();
        }
    }, [movieName, page]);

    return (
        <main>
            <SearchBar onSubmit={handleSubmit} />
            {loading && ("Loading...")}
            {error && ("ERROR")}
            <MoviesList movies={movies} />
            {movies.length > 0 && <LoadMore onClick={handleLoadMore} />}
        </main>
    )
}
import { fetchMovieById } from "Api";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function MovieDetails() {
    const params = useParams();
    const [movie, setMovie] = useState();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        async function getMovie() {
            try {
                setLoading(true);
                setError(false);
                const fetchedMovie = await fetchMovieById(params.movieId);
                setMovie(fetchedMovie);
            } catch (error) {
                setError(true)
            } finally {
                setLoading(false)
            }
        }
        getMovie()
    }, [params.movieId]);

    return (
    <main>
            {loading && ("Loading...")};
            {error && ("ERROR")};
            {movie && (<div>{movie.original_title}</div>)}
     </main>
    )
}
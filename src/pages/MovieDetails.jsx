import { fetchMovieById } from "Api";
import { useEffect, useRef, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { MovieDetailsMarkup } from "components/MovieDetailsMarkup/MovieDetailsMarkup";
import { Outlet } from "react-router-dom";
import { MovieDetailsNav } from "components/MovieDetailsNav/MovieDetailsNav";
import { BackLink } from "components/BackLink/BackLink";

export default function MovieDetails() {
    const params = useParams();
    const [movie, setMovie] = useState();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const location = useLocation();
    const backLinkRef = useRef(location.state?.from ?? '/movies');
    console.log(backLinkRef)

    useEffect(() => {
        const controller = new AbortController();
        const options = {
        headers: {
        accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNjcxYWI2NDE1ZTQzMmI4NzliOWYyZGExZmVmNzMzNiIsInN1YiI6IjY0ZjczOTllZmZjOWRlMDBhYzRmMTg5MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.KxoO5UBzcSO6Jwoana0Pbke2nBChrIK0Dhb7VVA5Bbw'
            },
            signal: controller.signal
        };
        async function getMovie() {
            try {
                setLoading(true);
                setError(false);
                const fetchedMovie = await fetchMovieById(params.movieId, options);
                setMovie(fetchedMovie);
                console.log(fetchedMovie)
            } catch (error) {
                if (error.code !== 'ERR_CANCELED') {
                    setError(true)
                }
            } finally {
                setLoading(false)
            }
        }
        getMovie()
        return () => {
            controller.abort();
        }
    }, [params.movieId]);

    return (
        <main>
            <BackLink to={backLinkRef.current}/> 
            {loading && ("Loading...")}
            {error && ("ERROR")}
            {movie && (<MovieDetailsMarkup movie={movie} />)}
            <MovieDetailsNav/>
            <Outlet/>
    </main>
    )
}
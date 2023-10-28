import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchCast } from "Api";
import { CastList } from "components/CastList/CastList";
import { ErrorMsg } from "components/ErrorMessage/ErrorMessage";

export default function Cast() {
    const params = useParams();
    const [cast, setCast] = useState();
    const [error, setError] = useState(false);

    useEffect(() => {
        const controller = new AbortController();
        const options = {
        headers: {
        accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNjcxYWI2NDE1ZTQzMmI4NzliOWYyZGExZmVmNzMzNiIsInN1YiI6IjY0ZjczOTllZmZjOWRlMDBhYzRmMTg5MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.KxoO5UBzcSO6Jwoana0Pbke2nBChrIK0Dhb7VVA5Bbw'
            },
            signal: controller.signal
        };
        async function getCast() {
            try {
                setError(false);
                const fetchedCast = await fetchCast(params.movieId, options);
                setCast(fetchedCast);
            } catch (error) {
                if (error.code !== 'ERR_CANCELED') {
                    setError(true)
                }
            }
        };
        getCast();
        
        return () => {
            controller.abort();
        }
    }, [params.movieId]);

    return (
        <div>
            {error && (<ErrorMsg />)}
            {cast && (<CastList cast={cast} />)}
        </div>
    );
};
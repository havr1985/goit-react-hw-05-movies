import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchReviews } from "Api";
import { ReviewsList } from "components/ReviewsList/ReviewsList";
import { ErrorMsg } from "components/ErrorMessage/ErrorMessage";


export default function Reviews() {
    const params = useParams();
    const [reviews, setReviews] = useState();
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
        async function getReviews() {
            try {
                setError(false);
                const fetchedReviews = await fetchReviews(params.movieId, options);
                setReviews(fetchedReviews);
            } catch (error) {
                if (error.code !== 'ERR_CANCELED') {
                    setError(true)
                }
            } 
        };
        getReviews();
        
        return () => {
            controller.abort();
        }
    }, [params.movieId]);

    return (
        <div>
            {error && (<ErrorMsg />)}
            {reviews && (<ReviewsList reviews={reviews.results} />)}
        </div>
    );
};
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchReviews } from "Api";
import { ReviewsList } from "components/ReviewsList/ReviewsList";


export default function Reviews() {
    const params = useParams();
    const [reviews, setReviews] = useState();
    const [loading, setLoading] = useState(false);
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
                setLoading(true);
                setError(false);
                const fetchedReviews = await fetchReviews(params.movieId, options);
                setReviews(fetchedReviews);
                console.log(fetchedReviews.results)
            } catch (error) {
                if (error.code !== 'ERR_CANCELED') {
                    setError(true)
                }
            } finally {
                setLoading(false)
            }
        }
        getReviews();
        
        return () => {
            controller.abort();
        }
    }, [params.movieId]);

    return (
        <div>
            {loading && ("Loading...")}
            {error && ("ERROR")}
            {reviews && (<ReviewsList reviews={reviews.results} />)}
        </div>
    )
    
};
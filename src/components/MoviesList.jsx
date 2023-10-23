import { Link } from "react-router-dom";
import { MoviesItem } from "./MoviesItem";

export const MoviesList = ({ movies }) => {
    return (
        <Link>
            {movies.map(movie => (
                <li key={movie.id}>
                    <MoviesItem movie={movie} />
                </li>
            ))}
        </Link>
    ) 
};
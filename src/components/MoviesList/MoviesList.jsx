import { Item, List } from "./MoviesList.styled";
import { MoviesItem } from "../MoviesItem/MoviesItem";

export const MoviesList = ({ movies }) => {
    return (
        <List>
            {movies.map(movie => (
                <Item key={movie.id}>
                    <MoviesItem movie={movie} />
                </Item>
            ))}
        </List>
    );
};
import { Link } from "react-router-dom";
import { CardWrap, Img, TitleMovie } from "./MoviesItem.styled";

export const MoviesItem = ({ movie: { original_title, poster_path, id } }) => {
    let url = `https://image.tmdb.org/t/p/w200${poster_path}`
    return (
    <Link to={`/movies/${id}`}>
        <CardWrap>
            <Img src={url} alt={original_title} />
            <TitleMovie>{original_title}</TitleMovie>
        </CardWrap>
    </Link>
    )

}
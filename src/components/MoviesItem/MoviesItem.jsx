import { Link, useLocation } from "react-router-dom";
import { CardWrap, Img, TitleMovie } from "./MoviesItem.styled";

export const MoviesItem = ({ movie: { original_title, poster_path, id } }) => {
    const location = useLocation();
    let url = '';
    if (poster_path) {
                    url = `https://image.tmdb.org/t/p/w200/${poster_path}`;
                } else {
                    url = 'https://ranobehub.org/img/ranobe/posters/default.jpg'
                }
    return (
    <Link to={`/movies/${id}`} state={{ from: location }}>
        <CardWrap>
            <Img src={url} alt={original_title} />
            <TitleMovie>{original_title}</TitleMovie>
        </CardWrap>
    </Link>
    )

}
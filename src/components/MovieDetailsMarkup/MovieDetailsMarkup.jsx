import { DetailsWrap, Img, TextWrap } from "./MovieDetailsMarkup.styled";

export const MovieDetailsMarkup = ({ movie: { original_title, overview, poster_path, genres, vote_average } }) => {
    let url = "";
    if (poster_path) {
        url = `https://image.tmdb.org/t/p/w300/${poster_path}`;
    } else {
        url = 'https://ranobehub.org/img/ranobe/posters/default.jpg';
    };
    let newGenres = [];
    genres.forEach(genre => newGenres.push(genre.name));
    newGenres = newGenres.join(', ');

    return (
        <DetailsWrap>
            <Img src={url} alt={original_title} />
            <TextWrap>
                <h1>{original_title}</h1>
                <p>User Score: {vote_average}</p>
                <h2>Overview</h2>
                <p>{overview}</p>
                <h2>Genres</h2>
                <p>{newGenres}</p>
            </TextWrap>
        </DetailsWrap>
    );
};
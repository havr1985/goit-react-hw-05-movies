export const MoviesItem = ({ movie: { original_title, poster_path } }) => {
    let url = `https://image.tmdb.org/t/p/w200${poster_path}`
    return (
        <div>
            <img src={url} alt={original_title} />
            <p>{original_title}</p>
        </div>
    )

}
export default function MovieCard({movie}){
    return(
        <article className="movie-card">
            <h2>{movie.title}</h2>
            <p>Directed by {movie.director}</p>
            <p>Released in {movie.year}</p>
        </article>
    );
}
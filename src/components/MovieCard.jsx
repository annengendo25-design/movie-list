export default function MovieCard({movie}){
    return(
        <article>
            <h2>{movie.title}</h2>
            <p>Directer by {movie.director}</p>
            <p>Released in {movie.year}</p>
        </article>
    );
}
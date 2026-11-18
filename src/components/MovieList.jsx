import MovieCard from "./MovieCard.jsx";
export default function MovieList({movies, onDelete}){
  return(
    <section className="movie-grid" aria-label="Movies">
        {movies.map((movie)=>(
            <MovieCard key={movie.id} movie={movie} onDelete={onDelete}/>
        ))}
    </section>
  );  
}
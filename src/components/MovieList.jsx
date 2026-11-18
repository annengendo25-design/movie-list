import MovieCard from "./MovieCard.jsx";
export default function MovieList({movies}){
  return(
    <section aria-label="Movies">
        {movies.map((movie)=>(
            <MovieCard key={movie.id} movie={movie}/>
        ))}
    </section>
  );  
}
import MovieList from "./components/MovieList.jsx";
import {movies} from "./data/movies.js";
export default function app(){
  return(
    <main>
      <h1>My Movie List</h1>
      <MovieList movies={movies}/>
    </main>
  );
}
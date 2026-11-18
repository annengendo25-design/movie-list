import { useState } from "react";
import MovieList from "./components/MovieList.jsx";
import {movies as initialMovies} from "./data/movies.js";
export default function App(){
  const [movies,setMovies]=useState(initialMovies);
  return(
    <main>
      <h1>My Movie List</h1>
      <MovieList movies={movies}/>
    </main>
  );
}
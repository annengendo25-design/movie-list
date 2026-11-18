import { useState } from "react";
import AddMovieForm from "./components/AddMovieForm.jsx";
import MovieList from "./components/MovieList.jsx";
import {movies as initialMovies} from "./data/movies.js";
export default function App(){
  const [movies,setMovies]=useState(initialMovies);
  function addMovie(movieDetails){
    const newMovie={...movieDetails,id:crypto.randomUUID()};
    setMovies((currentMovies)=>[...currentMovies,newMovie]);
  }
  return(
    <main>
      <h1>My Movie List</h1>
      <AddMovieForm onAdd={addMovie}/>
      <MovieList movies={movies}/>
    </main>
  );
}
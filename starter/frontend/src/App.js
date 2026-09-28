import { useCallback, useState } from 'react';
import MovieList from './components/MovieList';
import MovieDetails from './components/MovieDetails';
import './App.css';

export default function App() {
  const [selectedMovie, setSelectedMovie] = useState(null);

  const selectMovie = useCallback((movie) => setSelectedMovie(movie), []);

  return (
    <div className="container">
      <h1>Movie List</h1>

      <MovieList onMovieClick={selectMovie} />

      {selectedMovie && (
        <>
          <h1>Movie Details</h1>
          <MovieDetails movie={selectedMovie} />
        </>
      )}
    </div>
  );
}

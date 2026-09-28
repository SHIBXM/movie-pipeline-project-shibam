import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

function MovieList({ onMovieClick }) {
  const [movies, setMovies] = useState([]);
  const [status, setStatus] = useState('loading');

  useEffect(() => {
    let isCurrent = true;

    async function fetchMovies() {
      try {
        const response = await axios.get(`${process.env.REACT_APP_MOVIE_API_URL}/movies`);
        if (isCurrent) {
          setMovies(response.data.movies);
          setStatus('ready');
        }
      } catch {
        if (isCurrent) setStatus('error');
      }
    }

    fetchMovies();
    return () => {
      isCurrent = false;
    };
  }, []);

  if (status === 'loading') return <p role="status">Loading movies…</p>;
  if (status === 'error') return <p role="alert">Movies could not be loaded.</p>;

  return (
    <ul aria-label="Movies">
      {movies.map((movie) => (
        <li key={movie.id}>
          <button className="movieItem" type="button" onClick={() => onMovieClick(movie)}>
            {movie.title}
          </button>
        </li>
      ))}
    </ul>
  );
}

MovieList.propTypes = {
  onMovieClick: PropTypes.func.isRequired,
};

export default MovieList;

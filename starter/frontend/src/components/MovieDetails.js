import { useEffect, useState } from 'react';
import axios from 'axios';

function MovieDetails({ movie }) {
  const [details, setDetails] = useState(null);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    let isCurrent = true;
    setDetails(null);
    setHasError(false);

    axios
      .get(`${process.env.REACT_APP_MOVIE_API_URL}/movies/${movie.id}`)
      .then((response) => isCurrent && setDetails(response.data.movie))
      .catch(() => isCurrent && setHasError(true));

    return () => {
      isCurrent = false;
    };
  }, [movie]);

  if (hasError) return <p role="alert">Movie details could not be loaded.</p>;
  if (!details) return <p role="status">Loading movie details…</p>;

  return (
    <section aria-label="Selected movie">
      <h2>{details.title}</h2>
      <p>{details.description}</p>
    </section>
  );
}

export default MovieDetails;

import { useMatch, useOutletContext } from "react-router-dom";
import MovieCard from "components/MovieCard/MovieCard";

const MoviePage = () => {
    const { movies } = useOutletContext();

    const match = useMatch("/movie/:movieId");
    const movieId = match?.params.movieId;
    if (!movieId) return <p>Movie not found</p>;
  
    const movie = movies.find((movie) => movie.id.toString() === movieId);
    if (!movie) return <p>Movie not found</p>;

  return (
    <div>
        <MovieCard movie={movie} />
    </div>
  );
};

export default MoviePage;

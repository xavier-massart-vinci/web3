import { Link } from "react-router-dom";

const MovieListTitle = ({ movies }) => {
  return (
    <div>
      <ul >
        {movies.map((movie) => (
          <Link key={movie.id} to={`/movie/${movie.id}`} style={{ display: "block" }}>
          {movie.title}
        </Link>
        ))}
      </ul>
    </div>
  );
};

export default MovieListTitle;

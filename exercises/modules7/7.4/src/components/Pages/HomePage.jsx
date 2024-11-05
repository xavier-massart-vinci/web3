import MovieListTitle from "components/MovieListTitle/MovieListTitle";
import { useOutletContext } from "react-router-dom";

const HomePage = () => {
  const { movies } = useOutletContext();

  return (
    <div>
      <h1>Home Page</h1>
      <p>Welcome to my favorite movies website!</p>
      <MovieListTitle movies={movies} />
    </div>
  );
};

export default HomePage;

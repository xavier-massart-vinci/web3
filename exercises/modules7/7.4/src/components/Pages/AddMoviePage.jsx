import AddMovieForm from "components/AddMovieForm/AddMovieForm";
import { useOutletContext } from "react-router-dom";

const AddMoviePage = () => {
  const { onMovieAdded } = useOutletContext();
    return (
        <AddMovieForm onMovieAdded={onMovieAdded} />
    )
}

export default AddMoviePage;
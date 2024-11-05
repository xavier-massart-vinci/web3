import { useState } from "react";
import "./AddMovieForm.css";
import { Input, Button } from "antd";
import { Form } from "react-router-dom";

const AddMovieForm = ({ onMovieAdded }) => {
  const [title, setTitle] = useState("");
  const [director, setDirector] = useState("");
  const [duration, setDuration] = useState(0);
  const [imageUrl, setImageUrl] = useState("");
  const [description, setDescription] = useState("");
  const [budget, setBudget] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    onMovieAdded({ title, director, duration, imageUrl, description, budget });
    setTitle("");
    setDirector("");
    setDuration(0);
    setImageUrl("");
    setDescription("");
    setBudget(0);
  };
  return (
    <Form onSubmit={handleSubmit}>
      <div>
        <label>Titre :</label>
        <Input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Réalisateur :</label>
        <Input value={director}
          onChange={(e) => setDirector(e.target.value)}
          required/>
      </div>
      <div>
        <label>Durée :</label>
        <Input
          type="number"
          value={duration}
          onChange={(e) => setDuration(parseInt(e.target.value))}
          required
        />
      </div>
      <div>
        <label>{"URL de l'image :"}</label>
        <Input
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
        />
      </div>
      <div>
        <label>Description :</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <div>
        <label>Budget :</label>
        <Input
          type="number"
          value={budget}
          onChange={(e) => setBudget(parseInt(e.target.value))}
        />
      </div>
      <Button type="primary">Ajouter</Button>
    </Form>
  );
};

export default AddMovieForm;

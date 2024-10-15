import {Context as ProviderWrapper } from 'context/ProviderWrapper';
import { useContext, useState } from 'react'


function App() {
  const {
    opinions,
    addOpinion,
    voteForOpinion
  } = useContext(ProviderWrapper);

  const [opinion, setOpinion] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addOpinion(opinion);
    setOpinion("");
  }

  const handleChange = (e) => {
    setOpinion(e.target.value);
  }


  return (
    <>
      <ul>
        {opinions.map(opinion => (
          <li key={opinion.id}>
            {opinion.opinion} : {opinion.votes}
            
            <button onClick={() => voteForOpinion(opinion.id)}>Vote</button>
          </li>
        ))}
      </ul>
      
      <form onSubmit={handleSubmit}>
        <input type="text" value={opinion} onChange={handleChange}/>
        <button type="submit">Add Opinion</button>
      </form>
    </>
  )
}

export default App

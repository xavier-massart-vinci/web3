import {Context as ProviderWrapper } from 'context/ProviderWrapper';
import { useContext } from 'react'


function App() {
  const {
    voteGood, 
    incGood,
    voteOk,
    incOk,
    voteBad,
    incBad,
    resetAll
  } = useContext(ProviderWrapper);

  return (
    <>
      <ul>
        <li>Good {voteGood}:  <button onClick={incGood}>increase good</button></li>
        <li>Ok {voteOk}:  <button onClick={incOk}>increase ok</button></li>
        <li>Bad {voteBad}:  <button onClick={incBad}>increase bad</button></li>
        <li><button onClick={resetAll}>Reset all</button></li>
      </ul>
    </>
  )
}

export default App

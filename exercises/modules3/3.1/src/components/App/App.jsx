import Statistics from 'components/Statistics/Statistics'
import Button from 'components/Button/Button'
import { useState } from 'react'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)



  return (
    <>
    <div>
      <h2>FeedBack</h2>
      <Button value="Good" onClick={() => {setGood(good +1)}} />
      <Button value="Neutral" onClick={() => {setNeutral(neutral +1)}} />
      <Button value="Bad" onClick={() => {setBad(bad +1)}} />

    </div>

    <Statistics good={good} bad={bad} neutral={neutral}/>

  </>
    )
}

export default App
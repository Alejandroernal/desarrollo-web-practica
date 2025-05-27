import { useState } from 'react'
import Statistics from './componnents/Statistics'

const App = () => {
  // guarda los clics de cada botón en su propio estado
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const getAll = () => good + neutral + bad
  const getAverange = () => ((good*1) + (neutral*0) + (bad*-1)) / getAll()
  const getPositive = () => good*100/getAll()

  return (
    <div>
      <h1>give feedback</h1>
      <button onClick={() => setGood(good + 1)}>good</button>
      <button onClick={() => setNeutral(neutral + 1)}>neutral</button>
      <button onClick={() => setBad(bad + 1)}>bad</button>
      



      <h1>statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad}></Statistics>
      {/* (1.7)
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <p>All {getAll()}</p>
      <p>Averange {getAverange()}</p>
      <p>positive {getPositive()}%</p>
      */}
    </div>
  )
}

export default App
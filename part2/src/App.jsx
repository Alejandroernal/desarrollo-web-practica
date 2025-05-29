import { useState } from 'react'
import Statistics from './componnents/Statistics'

const App = () => {

const [votes, setVotes]= useState({
  good:0,
  bad:0,
  neutral:0
})

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>{text}</button>
)



  return (
    <div>
      <h1>give feedback</h1>


      {/*
      <button onClick={() => setVotes({... votes, good: votes.good + 1})}>good</button>
      <button onClick={() => setVotes({... votes, neutral: votes.neutral + 1})}>neutral</button>
      <button onClick={() => setVotes({... votes, bad:votes.bad + 1})}>bad</button>*/}

      <Button handleClick={() => setVotes({... votes, good: votes.good + 1})} text="good"></Button>

      <Button handleClick={()=> setVotes({... votes, neutral: votes.neutral + 1})} text="neutral"></Button>
      <Button handleClick={()=> setVotes({... votes, bad: votes.bad + 1})} text="bad"></Button>



      <h1>statistics</h1>
      <Statistics votes={votes}></Statistics>
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
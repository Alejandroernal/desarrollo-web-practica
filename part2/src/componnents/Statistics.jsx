import React from 'react'

const Statistics = ({votes}) => { 
  const getAll = () => votes.good + votes.neutral + votes.bad
  const getAverange = () => ((votes.good*1) + (votes.neutral*0) + (votes.bad*-1)) / getAll()
  const getPositive = () => votes.good*100/getAll()

  return (
    <div>
      <p>good {votes.good}</p>
      <p>neutral {votes.neutral}</p>
      <p>bad {votes.bad}</p>
      <p>All {getAll()}</p>
      <p>Averange {getAverange()}</p>
      <p>positive {getPositive()}%</p>
    </div>
  )
}

export default Statistics

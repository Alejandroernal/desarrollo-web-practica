import React from 'react'

const Statistics = ({good, neutral, bad}) => {
    const getAll = () => good + neutral + bad
  const getAverange = () => ((good*1) + (neutral*0) + (bad*-1)) / getAll()
  const getPositive = () => good*100/getAll()

  return (
    <div>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <p>All {getAll()}</p>
      <p>Averange {getAverange()}</p>
      <p>positive {getPositive()}%</p>
    </div>
  )
}

export default Statistics

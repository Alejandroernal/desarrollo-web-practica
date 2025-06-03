import React from 'react'

const Statistics = ({votes}) => { 
  const getAll = () => votes.good + votes.neutral + votes.bad
  const getAverange = () => ((votes.good*1) + (votes.neutral*0) + (votes.bad*-1)) / getAll()
  const getPositive = () => votes.good*100/getAll()

if(getAll()==0){
    return(
        <h1>No feedback given</h1>
    )
  }

  const Statistics2 = ({votes}) => {

  return(
    <table>
      <tbody>
        <StatisticLine text="good" value={votes.good} />
        <StatisticLine text="neutral" value={votes.neutral} />
        <StatisticLine text="bad" value={votes.bad} />
        <StatisticLine text="All" value ={getAll()} />
        <StatisticLine text="Averange" value ={getAverange()} />
        <StatisticLine text="positive" value ={getPositive()} />
      </tbody>
    </table>
  )
}

const StatisticLine = ({ text, value }) => (
  <tr>
    <td>{text}</td>
    <td>{value}</td>
    </tr>
  
)
  

  return (
    <div>
      {/*
      <StatisticLine text="good" value ={votes.good} />
      <StatisticLine text="neutral" value ={votes.neutral} />
      <StatisticLine text="bad" value ={votes.bad} />
      */}
      
      <table>
       <tbody>
      <Statistics2 votes={votes} />
 {/*
      <StatisticLine text="All" value ={getAll()} />
      <StatisticLine text="Averange" value ={getAverange()} />
      <StatisticLine text="positive" value ={getPositive()} />
*/}
       </tbody>
      </table>
      
    </div>
  )
}

export default Statistics

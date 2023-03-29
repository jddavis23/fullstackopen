import { useState } from 'react'

const Button = ({handleClick, text}) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const Stats = ({feedback, stats}) => {
  return (
  <table>
    <tbody>
      <tr>
          <th>{feedback}</th>
          <td>{stats}</td>
      </tr>
    </tbody>
  </table>

)
}

const Statistics = ({good, neutral, bad}) => {
  const total = bad + good + neutral
  if (total === 0)
  {
    return (
      <div>No feedback given</div>
    )
  }
  
  return (
    <div>
      <Stats feedback='good' stats={good}/>
      <Stats feedback='neutral' stats={neutral}/>
      <Stats feedback='bad' stats={bad}/>
      <Stats feedback='all' stats={total}/>
      <Stats feedback='average' stats={((bad * -1) + (good * 1) + (neutral * 0)) / 3}/>
      <Stats feedback='positive %' stats={(good/total) * 100}/>
    </div>
  )
}


const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const setToGood = () => {
    const update = good + 1
    setGood(update)
  }
  
  const setToNeutral = () => {
    const update = neutral + 1
    setNeutral(update)

  }
  
  const setToBad = () => {
    const update = bad + 1
    setBad(update)

  }
  return (
    <div>
      <h1>Unicafe</h1>
      <Button handleClick={setToGood} text='good' />
      <Button handleClick={setToNeutral} text='neutral' />
      <Button handleClick={setToBad} text='bad' />
      <h1>statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

export default App;

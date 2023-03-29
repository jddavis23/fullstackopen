import { useState } from 'react'

const Button = ({handleClick, text}) => (
  <button onClick={handleClick}>
    {text}
  </button>
)



const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  console.log('ere')
  const setToGood = () => {
    console.log('b4',{good})
    const update = good + 1
    setGood(update)
    console.log('aft',{good})
  }
  
  const setToNeutral = () => {
    console.log('b4',{neutral})
    const update = neutral + 1
    setNeutral(update)
    console.log('aft',{neutral}) //fix updating of states

  }
  
  const setToBad = () => {
    console.log('b4',{bad})
    const update = bad + 1
    setBad(update)
    console.log('aft',{bad})

  }
  return (
    <div>
      <h1>
          Unicafe
      </h1>
      <Button handleClick={setToGood} text='good' />
      <Button handleClick={setToNeutral} text='neutral' />
      <Button handleClick={setToBad} text='bad' />
    </div>
  )
}

export default App;

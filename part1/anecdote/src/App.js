import { useState } from 'react'


const Button = ({handleClick, text}) => {
  return (
    <>
      <button onClick={handleClick}>{text}
      </button>
    </>
  )
}

const MostVotes = ({anec, maxi, selected}) => {

  return(
    <div>
      <h1>
        Anecdote with the most votes
      </h1>
      {anec[selected]}
      <br/>
      has {maxi} votes
    </div>
  )
}

const App = () => {
  const [votes, setVotes] = useState([0,0,0,0,0,0,0,0])
  const [maxi, setMax] = useState(0)
  const [anMax, setAnMax] = useState(0)
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [selected, setSelected] = useState(0)
  
  const choose = () => {
    setSelected(Math.floor(Math.random() * 7))
  }

  const addCount = () => {
    const newvotes = {...votes}
    console.log(selected, 'before',votes[0],votes[1],votes[2],votes[3],votes[4],votes[5],votes[6],votes[7])
    newvotes[selected] += 1
    if (newvotes[selected] > maxi)
    {
      setMax(newvotes[selected])
      setAnMax(selected)
    }
    console.log('prob')

    console.log(selected, 'before',newvotes[0],newvotes[1],newvotes[2],newvotes[3],newvotes[4],newvotes[5],newvotes[6],newvotes[7])
    setVotes(newvotes)
  }
  
  return (
    <div>
      {anecdotes[selected]}
      <br/>
        has {votes[selected]} votes
      <br/>
      <Button handleClick={choose} text={'next anecdote'}/>
      <Button handleClick={addCount} text={'vote'}/>
      <MostVotes anec={anecdotes} maxi={maxi} selected={anMax} />
    </div>
  )
}

export default App;

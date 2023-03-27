
const Header = (props) => {
  return (
    <div>
      <h1>
        {props.course}
      </h1>
    </div>
  )
}

const Part = (props) => {
  return (
    <div>
      <p>
        {props.name} {props.ex}
      </p>
    </div>
  )
}

const Content = (props) => {
  return (
    <div>
      <Part name={props.first.name} ex={props.first.ex}/>
      <Part name={props.second.name} ex={props.second.ex}/>
      <Part name={props.third.name} ex={props.third.ex}/>
    </div>
  )
}

const Total = (props) => {
  return (
    <div>
      <p>
        {props.one + props.two + props.three}
      </p>
    </div>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14
  const al = [
    { name: part1, ex: exercises1 },
    { name: part2, ex: exercises2 },
    { name: part3, ex: exercises3 },
  ]
  return (
    <div>
      <Header course={course}/>
      <Content first={al[0]} second={al[1]} third={al[2]}/>
      <Total one={exercises1} two={exercises2} three={exercises3}/>
    </div>
  )
}
export default App;

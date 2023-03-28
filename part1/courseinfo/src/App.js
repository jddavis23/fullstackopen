
const Header = (props) => {
  return (
    <div>
      <h1>
        {props.course.name}
      </h1>
    </div>
  )
}

const Part = (props) => {
  //console.log(part)
  return (
    <div>
      <p>
        {props.arr.name} {props.arr.exercises}
      </p>
    </div>
  )
}

const Content = (props) => {
  return (
    <div>
      <Part arr={props.part.parts[0]}/>
      <Part arr={props.part.parts[1]}/>
      <Part arr={props.part.parts[2]}/>
    </div>
  )
}

const Total = (props) => {
  console.log(props.part.parts[0])
  return (
    <div>
      <p>
        {props.part.parts[0].exercises + props.part.parts[1].exercises + props.part.parts[2].exercises}
      </p>
    </div>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course={course} />
      <Content part={course} />
      <Total part={course} />
    </div>
  )
}


export default App;

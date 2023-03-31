// import { useState } from 'react'

const Parts = ({ head, total, setTotal }) => {
    return(
        <li>
            {head.name} {head.exercises}
        </li>
    )
}


const Course = ({course}) => {
    const total = course.parts.reduce((currentValue, element) => {
        return element.exercises + currentValue
    }, 0);
    console.log(total)
    return(
        <div>
            <h1>{course.name}</h1>
            <ul>
                {course.parts.map(nps => 
                 <Parts key={nps.id} head={nps} />
                 )}
            </ul>
            <h4>total of {total} exercises</h4>
        </div>
    )
}



export default Course;
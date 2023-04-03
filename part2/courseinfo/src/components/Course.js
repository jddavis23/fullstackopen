// import { useState } from 'react'

const Parts = ({ head, total, setTotal }) => {
    return(
        <li>
            {head.name} {head.exercises}
        </li>
    )
}

const Singlecourse = ({header, parts}) => {
    console.log(header)
    const total = parts.reduce((currentValue, element) => {
        return element.exercises + currentValue
    }, 0);
    console.log(total)
    return (
        <div>
            <h1>{header}</h1>
            <ul>
                {parts.map(nps => 
                 <Parts key={nps.id} head={nps} />
                 )}
            </ul>
            <h4>total of {total} exercises</h4>
        </div>
    )
}

const Course = ({course}) => {
    return(
        <div>
            <ul>
            {course.map(course =>
                <Singlecourse key={course.id} header={course.name} parts={course.parts} />
            )}
            </ul>
        </div>    
    )
}





export default Course;
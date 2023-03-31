const Parts = ({ head }) => {
    console.log(head)
    return(
        <li>
            {head.name} {head.exercises}
        </li>
    )
}


const Course = ({course}) => {
    console.log(course.name)
    const np = course.parts
    console.log(np[0].id)

    // console.log(course.parts)
    return(
        <div>
            <h1>{course.name}</h1>
            <ul>
                {course.parts.map(nps => 
                 <Parts key={nps.id} head={nps} />)}
            </ul>
        </div>
    )
}



export default Course;
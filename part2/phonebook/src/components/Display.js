const Display = ({searchList}) => {
    return(
        <div>
            <ul>
                {searchList.map(person =>
                    <li key={person.name}>
                    {person.name} {person.number}
                    </li>
                )}
            </ul>
        </div>
    )
}
export default Display
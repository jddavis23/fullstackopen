const Display = ({searchList, deletePerson}) => {
    return(
        <div>
            <ul>
                {searchList.map(person =>
                    <li key={person.name}>
                    {person.name} {person.number}
                    <button onClick={deletePerson}>delete</button>
                    </li>
                )}
            </ul>
        </div>
    )
}
export default Display
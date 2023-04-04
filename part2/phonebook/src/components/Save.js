const Save = ({newName, newNumber, handleNameChange, handleNumberAdd, addName}) => {
    return (
        <form onSubmit={addName}>
            <h2>Add new</h2>
            <div>
            name: <input value={newName} onChange={handleNameChange}/>
            </div>
            <div>
            number: <input value={newNumber} onChange={handleNumberAdd}/>
            </div>
            <div>
            <button type="submit">add</button>
            </div>
        </form>
    )
}

export default Save
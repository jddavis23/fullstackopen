const Search = ({searchName, handleSearch}) => {
    return (
        <form>
            <div>
            name: <input value={searchName} onChange={handleSearch}/>
            </div>
        </form>
    )
}

export default Search
const Search = ({searchName, handleSearch}) => {
    return (
        <form>
            <div>
            filter: <input value={searchName} onChange={handleSearch}/>
            </div>
        </form>
    )
}

export default Search
const SearchInput = () => {
    return (
        <div className = "search-input"> 
            <input id = "search-input" type = "text" placeholder = "New task" size = "70"></input>
            <label for = "search-label" className = "task-title" ></label>
            <button className = "btn-add"> Add </button>
        </div>
    )
}
export default SearchInput ;
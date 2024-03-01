function Searchbar({setFilter}){

    const handleChange = (event) =>{
        setFilter(event.target.value)
    }
    return(
        <div>
            <label>Search: <input type="text" onChange={handleChange}></input></label>
        </div>
    )
}

export default Searchbar
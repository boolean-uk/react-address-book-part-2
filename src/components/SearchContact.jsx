import { Navigate, useNavigate } from "react-router-dom";
import { useState } from "react";
export default function SearchContact() {
    const [search, setSearch] = useState('');
    const navigate = useNavigate();

    const handleChange = (e) => {
        setSearch(e.target.value);
    }
    const getSearch = () => {
        navigate(`/contact/${search}`);
    }
    return (
        <div>
            <h1>Search Contact by ID</h1>
            <input type="text" placeholder="Search Contact" onChange={handleChange} />
            <button onClick={getSearch}>Search</button>
        </div>
    );
}
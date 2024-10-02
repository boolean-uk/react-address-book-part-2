import { useContext } from "react"
import { AppContext } from "../../../App"
import { Link, Routes, Route } from 'react-router-dom'

export default function Dashboard(){

    const { contacts } = useContext(AppContext)

    return(
        <>
        <div className="main-menu">
            <h2>Menu</h2>
            <Link to="/contacts">Contact List</Link>
            <Link to="/create">Create new Contact</Link>
        </div>
        
        </>
    )
}
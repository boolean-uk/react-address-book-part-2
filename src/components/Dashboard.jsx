
import { useContext } from "react"
import { MyContext } from "../App"
import { Link, Route, Routes } from 'react-router-dom';


export default function Dashboard(){
    
    const context = useContext(MyContext)
    console.log(context)
    return <>
<h2>Welcome to the webpage</h2>
    </>
}
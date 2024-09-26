import { Link } from "react-router-dom"

function LeftMenu() {
  return (
    <div>
      <h1>Menu</h1>
      <Link to="/"><p>Contact List</p></Link>
      <Link to="/new"><p>Add New Contact</p></Link>
    </div>
  )
}

export default LeftMenu

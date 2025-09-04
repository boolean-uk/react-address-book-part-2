import { Link } from "react-router-dom"

export default function Menu () {
  


  return(<>

    <h1>Navigation</h1>

    <Link to={"/"}>
    <h2>Dashboard</h2>
    </Link>


    <Link to={"/create"}>
    <h2>Create Profile</h2>
    </Link>


  </>)


}

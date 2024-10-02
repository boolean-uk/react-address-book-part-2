import { Link } from "react-router-dom";

export default function Dashboard() {

    // const { contacts } = useContext(AppContext);

    return(
        <>
        <div className="menu">
            <h2>Menu</h2>
            <Link className="topLink" to="/contacts">Contact List</Link>
            <Link to="/create">Create New Contact</Link>
        </div>
        </>
    );
}
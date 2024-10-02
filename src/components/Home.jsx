import { Link } from 'react-router-dom';

function Home() {
    return (
        <div>
            <h1>Welcome to the Contact Application</h1>
            <nav>
                <ul>
                    <li>
                        <Link to="/dashboard">Dashboard</Link>
                    </li>
                    <li>
                        <Link to="/create">Create Contact</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Home;
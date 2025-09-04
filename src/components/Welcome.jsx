
import { Link } from 'react-router-dom'

function Welcome() {
    return (
        <>
        <div className="welcome">
            <h2>Welcome to your contact-page!</h2>
            <h3>Click the link down below to be navigated to the dashboard</h3>
            <Link to ="/dashboard">Dashboard</Link>
        </div>
        </>
    )
}

export default Welcome
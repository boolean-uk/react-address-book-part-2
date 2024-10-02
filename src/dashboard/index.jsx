import PeopleList from './components/PeopleList'
import './style.css'
function Dashboard() {
    return (
        <main className="dashboard-layout">
                <h2>Contacts</h2>
                <PeopleList />
        </main>
    )
}


export default Dashboard
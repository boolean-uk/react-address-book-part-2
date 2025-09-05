import { useContext } from "react"
import { userContext } from "../../App"
import { Link } from "react-router-dom"

function Dashboard() {

  const people = useContext(userContext).people

    

  return (
    <main className="dashboard-layout">
    <section>
        <ul>
            {people.length !== 0 ? people.map((person) => (
                <li key={person.id}>
                    <Link to={`/dashboard/${person.id}`}>
                        {person.firstName} {person.lastName}
                    </Link>
                </li>
            )) : "Loading"}
        </ul>
    </section>
    </main>
  )
}

export default Dashboard

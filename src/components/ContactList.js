import { useState,useEffect } from "react"
import { Link } from "react-router-dom"

function ContactList(props) {
  
  const [people, setPeople] = useState([])

  async function fetchPeople() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const json = await response.json()
    setPeople(json)
  }

  useEffect(() => {
    fetchPeople()
  }, [])

  console.log(people)

  return (
    <main className="dashboard-layout">
      <section>
        <h2>People</h2>
            <ul>
            {people.map((person, index) => (
                <li key={person.id}>
                <Link to={`/view/${person.id.value}`} state={person} >
                  <h3>
                    {person.name}
                  </h3>
                </Link>
                <article>
                    <h2>
                        {person.name.first} {person.name.last} 
                    </h2>
                </article>
              </li>
            ))}
            </ul>
      </section>
    </main>
  )
}

export default ContactList
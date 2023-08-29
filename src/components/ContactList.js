import { Link } from "react-router-dom"

function ContactList(props) {
  //All these are attempts to split the name into firstname and lastname for every element in the array but eventually I couldn't fix the errors.

  // function splitName(name) {
  //   const splittedname = name.split(" ")
  //   let firstname = name[0]
  //   let lastname = name[1]
  //   return (firstname, lastname)
  // }

  // props.people.forEach(splitName(props.people.name) {
  //   element.firstname=splitName.firstname
  //   element.lastname=splitName.lastname
  // })
  
  // let splittedname = []
  // for(let i=0; i< props.people.length ; i++) {
  //   splittedname = props.people[0].name.split(" ")
  //   let firstname = splittedname[0]
  //   let lastname = splittedname[1]

  //   {...props.people, {firstname:firstname}}
  //   ({...props.people, lastname:lastname})
  //   props.setPeople([ ...props.people, {firstname:firstname}])
  // }

  //________ Attempts end here and I continued with the whole name in .name
  

  console.log(props.people)

  return (
    <main className="dashboard-layout">
      <section>
        <h2>People</h2>
            <ul>
            {props.people.map((person, index) => (
                <li key={person.id}>
                <Link to={`/view/${person.id.value}`} state={person} >
                  <h3>
                    {person.name}
                  </h3>
                </Link>
                {/* <article>
                    <h2>
                        {person.firstname} {person.name.last} 
                    </h2>
                </article> */}
              </li>
            ))}
            </ul>
      </section>
    </main>
  )
}

export default ContactList
import { useContext, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { AppContext } from '../App'

export default function EditContactPage() {
  const [formValues, setFormValues] = useState()

  const navigate = useNavigate()
  const context = useContext(AppContext)
  const id = useParams()

  const contact = context.contacts.find((c) => 
    c.id == id.id)

  if (context.contacts && !contact) {
    return (<h2>Loading...</h2>)
  }

  if (!formValues) {
    setFormValues({
      firstName: contact.firstName,
      lastName: contact.lastName,
      street: contact.street,
      city: contact.city
    })
  }

  // console.log(formValues)

  if (!formValues) {
    return (<h2>Loading!...</h2>)
  }

  const handleSubmit = e => {
    e.preventDefault()
    const editedContact = {...formValues}
    fetch(`https://boolean-uk-api-server.fly.dev/pudkipz/contact/${id.id}`, {
      method: 'PUT',
      headers: {
        Accept: 'application/json',
        'Content-type': 'application/json'
      },
      body: JSON.stringify(editedContact)
    })
      .then(() => context.toggleFetch())

    navigate('/')
  }

  return (
    <section className='edit-contact'>
      <form onSubmit={e => handleSubmit(e)}>
        <h2>Edit contact</h2>
        <ul>
          <li>
            <b>First name:</b>
          </li>
          <li>
            <input
              onChange={e => setFormValues({...formValues, firstName: e.target.value})}
              value={formValues.firstName}
            />
          </li>

          <li>
            <b>Last name:</b>
          </li>
          <li>
            <input
              onChange={e => setFormValues({...formValues, lastName: e.target.value})}
              value={formValues.lastName}
            />
          </li>

          <li>
            <b>City:</b>
          </li>
          <li>
            <input
              onChange={e => setFormValues({...formValues, city: e.target.value})}
              value={formValues.city}
            />
          </li>

          <li>
            <b>Street:</b>
          </li>
          <li>
            <input
              onChange={e => setFormValues({...formValues, street: e.target.value})}
              value={formValues.street}
            />
          </li>
        </ul>
        <button type='submit'>Save</button>
        </form>
    </section>
  )
}
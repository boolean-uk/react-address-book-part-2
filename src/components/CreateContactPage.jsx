import { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../App'

export default function CreateContactPage() {
  const [formValues, setFormValues] = useState(
    {firstName: '',
      lastName: '',
      street: '',
      city: ''
    }
  )

  const navigate = useNavigate()
  const context = useContext(AppContext)

  const handleSubmit = e => {
    e.preventDefault()
    const contact = {...formValues}
    fetch('https://boolean-uk-api-server.fly.dev/pudkipz/contact', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-type': 'application/json'
      },
      body: JSON.stringify(contact)
    })
      .then(() => context.toggleFetch())

    // reset form values
    setFormValues({firstName: '',
      lastName: '',
      street: '',
      city: ''
    })

    navigate('/')
  }

  return (
    <section className='create-contact'>
      <form onSubmit={e => handleSubmit(e)}>
        <h2>Create contact</h2>
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
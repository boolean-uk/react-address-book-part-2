import { useContext } from 'react'
import { AppContext } from '../App'
import { useNavigate, useParams } from 'react-router-dom'
import { ComposableMap, Geographies, Geography, Marker } from 'react-simple-maps'

export default function ViewContactPage() {
  const context = useContext(AppContext)
  const id = useParams()
  const navigate = useNavigate()

  const handleDelete = () => {
    fetch(`https://boolean-uk-api-server.fly.dev/pudkipz/contact/${id.id}`, {
      method: 'DELETE',
      headers: {
        Accept: 'application/json',
        'Content-type': 'application/json'
      },
    })
      .then(() => context.toggleFetch())

    navigate('/')
  }

  const contact = context.contacts.find((c) => {
    return c.id == id.id
    })

  if (!contact) {
    return (<h2>Loading...</h2>)
  }

  return (
    <section className='view-contact'>
      <h2>{contact.firstName} {contact.lastName}</h2>
      <p>{contact.street}, {contact.city}</p>
      <button
        onClick={() => navigate(`/contact/${id.id}/edit`)}>Edit</button>
      <button
        onClick={handleDelete}>Delete</button>
      <ComposableMap
        projection='geoEqualEarth'>
        <Geographies
        geography='/features.json'
        >
          {({geographies}) =>
            geographies.map((geo) => (
              <Geography key={geo.rmsKey} geography={geo} />
            ))
          }
        </Geographies>
        <Marker key='pos' coordinates={[contact.latitude, contact.longitude]}>
          <circle r={10} fill='#f00' stroke='#fff' strokeWidth={2} />
        </Marker>
      </ComposableMap>
    </section>
  )
}
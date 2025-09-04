import { Link, useNavigate, useParams } from "react-router-dom"

export default function ContactProfile(props) {
    const{url, contacts, fetchData} = props
    const {id} = useParams()
    const contact = contacts.find((x) => x.id == id)
    const navigate = useNavigate()

    const deleteContact = async() => {
          try{
            await fetch(url+`/${id}`, {
                method: 'DELETE',
            })
        } catch (error) {
            console.error()
        }
        await fetchData()
        navigate('/')

        
    }

    if(!contact) return <p>Loading...</p>
    return (<>
    <article>
        <h2>{contact.firstName} {contact.lastName}</h2>
        <p>{contact.street} , {contact.city} </p>
        <button onClick={deleteContact}>Delete Contact</button>
        <Link to={`/updateContact/${id}`}><button>
            Update Contact</button></Link>
    </article>
    </>)
}
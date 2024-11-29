import ContactListItem from './ContactListItem'

export default function Contact(props) {
  const { data , deleteContact} = props

  console.log(data)
  return (
    <ul>
      {data.map((person) => (
     <ContactListItem key={person.id} person={person} deleteContact={deleteContact} />
      ))}
    </ul>
  )
}

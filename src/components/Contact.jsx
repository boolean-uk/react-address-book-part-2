import ContactListItem from './ContactListItem'

export default function Contact(props) {
  const { data } = props

  console.log(data)
  return (
    <ul>
      {data.map((person, index) => (
        <ContactListItem key={index} person={person} />
      ))}
    </ul>
  )
}

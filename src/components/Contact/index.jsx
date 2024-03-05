import ContactListItem from './ContactListItem.jsx'

function Contact( properties ){
    const { people } = properties

    /* const [people, setPeople] = useState([])

    useEffect(() => {
        fetch("https://boolean-api-server.fly.dev/Miadog7Extra/contact")
          .then((response) => response.json())
          .then((data) => setPeople(data));
          }, []); */

    return(
        <>
        <h1>Contact List</h1>
        <ul>
      {
        people.map((person, index) => (
          <ContactListItem key={index} person={person} />
        ))
      }
    </ul>
    </>
    )
}
export default Contact;
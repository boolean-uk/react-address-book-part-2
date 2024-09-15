import ContactListItem from "./ContactListItem"
export default function Main(props) {
    const {contacts} = props
    return (
        <div className="renderContact">
            {contacts.map((contact,index) => (<ContactListItem key={index} contact={contact}/>))}
        </div>
    )
} 
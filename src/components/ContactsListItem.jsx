export default function ContactsListItem(props) {
  const { contact } = props;

  return (
    <div>
      <h3>
        {contact.firstName} {contact.lastName}
      </h3>
    </div>
  );
}

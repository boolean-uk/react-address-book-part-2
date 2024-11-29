import { Link } from "react-router-dom";

function ContactItem(props) {
  const { person } = props;
  const url = "/view/" + props.keydata;

  return (
    <li>
      <Link to={url}>
        <h3>
          {person.firstName} {person.lastName}
        </h3>
      </Link>
    </li>
  );
}

export default ContactItem;

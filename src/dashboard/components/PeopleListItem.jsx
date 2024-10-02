import { Link } from "react-router-dom";

function PeopleListItem({ person }) {
  return (
    <li className="personLi">
      <h4>
        {person.firstName} {person.lastName}
      </h4>
      <div className="links">
        <Link className="link" to={`/person/${person.id}`}>
          View
        </Link>
      </div>
    </li>
  );
}

export default PeopleListItem;

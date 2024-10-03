import { Link } from "react-router-dom";
import "../Userlist.css";
import { useContext } from "react";
import { UserContext } from "../App";

export const UserListComponent = () => {
  const { userList } = useContext(UserContext);

  return (
    <ul className="user-list">
      {userList.map((user, index) => (
        <li key={index}>
          <Link to={"useritem/" + user.id.toString()}>
            {user.firstName + " " + user.lastName}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default UserListComponent;

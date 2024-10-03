import { useParams } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import "../UserItem.css";
import { UserContext } from "../App";
import { useNavigate } from "react-router-dom";

export const UserItemComponent = () => {
  const { userList, setUserList } = useContext(UserContext);
  const { id } = useParams();
  const [user, setUser] = useState([]);
  const Navigate = useNavigate();
  useEffect(() => {
    fetch(
      "https://boolean-uk-api-server.fly.dev/h602121/contact/" + id.toString()
    )
      .then((res) => {
        return res.json();
      })
      .then((x) => {
        console.log(x);

        setUser(x);
      });
  }, [id]);

  const DeleteUser = () => {
    fetch(
      "https://boolean-uk-api-server.fly.dev/h602121/contact/" + id.toString(),
      { method: "DELETE" }
    ).then(async (res) => {
      if (res.ok) {
        const newUserList = userList.filter((user) => user.id !== parseInt(id));
        setUserList(newUserList);
        Navigate("/contactlist");
      } else {
        console.error("Failed");
      }
    });
  };
  return (
    <div className="user-item">
      <h2>{user.firstName + " " + user.lastName}</h2>
      <p>{user.street + " " + user.city}</p>
      <button onClick={DeleteUser}>Delete user</button>
      <button>Edit user</button>
    </div>
  );
};

export default UserItemComponent;

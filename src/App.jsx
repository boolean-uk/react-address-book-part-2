import "./App.css";
import { Routes, Route, Link } from "react-router-dom";

import UserListComponent from "./components/UserListComponent";
import { useState, useEffect, createContext } from "react";
import UserItemComponent from "./components/UserItemComponent";
import AddUserComponent from "./components/AddUserComponent";
export const UserContext = createContext();

function App() {
  const [userList, setUserList] = useState([]);
  useEffect(() => {
    fetch("https://boolean-uk-api-server.fly.dev/h602121/contact")
      .then((res) => {
        return res.json();
      })
      .then((x) => {
        console.log(x);

        setUserList(x);
      });
  }, []);
  console.log(userList);
  return (
    <>
      <div className="app-container">
        <div className="menu">
          <h1>Menu</h1>
          <nav>
            <div>
              <Link to="/contactlist">Contacts list</Link>
            </div>
            <div>
              <Link to="/adduser">Add New Contact</Link>
            </div>
          </nav>
        </div>
        <div>
          <div className="content">
            <UserContext.Provider
              value={{ userList: userList, setUserList: setUserList }}
            >
              <Routes>
                <Route path="/"></Route>
                <Route path="contactlist" element={<UserListComponent />} />

                <Route
                  path="/contactlist/useritem/:id"
                  element={<UserItemComponent></UserItemComponent>}
                ></Route>

                <Route
                  path="/adduser"
                  element={<AddUserComponent></AddUserComponent>}
                ></Route>
              </Routes>
            </UserContext.Provider>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

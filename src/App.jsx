import { createContext, useEffect, useState } from "react";
import "./App.css";
import PeopleList from "./dashboard/index";
import { Link, Route, Routes } from "react-router-dom";
import NewPeople from './PersonProfile/index'
import PersonView from "./dashboard/components/PersonView";
import EditPerson from "./dashboard/components/EditPerson";
const MyPeopleContext = createContext();

function App() {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    fetch('https://boolean-uk-api-server.fly.dev/valen98/contact')
      .then((res) => res.json())
      .then((data) => {
        setPeople(data);
      });
  }, []);

  return (
    <main className="mainApp">
      <section className="sideMenu">
        <h3>Menu</h3>
        <div className="links">
          <Link to={"/"}>Conctacts list</Link>
          <Link to={"/addPeople"}>Add new People</Link>
        </div>
      </section>
      <MyPeopleContext.Provider
        value={{ people: people, setPeople: setPeople }}
      >
        <Routes>
          <Route path="/" element={<PeopleList />} />
          <Route path="/addPeople" element={<NewPeople />} />
          <Route path="/person/:id" element={<PersonView />} />
          <Route path="/person/:id/edit" element={<EditPerson />} />
        </Routes>
      </MyPeopleContext.Provider>
    </main>
  );
}

export { App, MyPeopleContext };

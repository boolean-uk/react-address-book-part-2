import { useContext } from "react";
import { Link, Route, Routes } from "react-router-dom";
import { ContactContext } from "../../App";

function MenuSection() {
  const context = useContext(ContactContext);
  
  return (
    <section>
      <h2>Menu</h2>
      <div>
        <ul>
          <p>
            <Link to="/contacts">Contacts List</Link>
          </p>
          <p>
            <Link to="/contacts/new">Add new Contact</Link>
          </p>
        </ul>
      </div>
    </section>
  );
}

export default MenuSection;

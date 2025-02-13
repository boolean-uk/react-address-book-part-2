import { NavLink } from "react-router";

export default function Navigator() {
  return (
    <>
      <nav>
        <ul>
          <NavLink to={"/"}>
            <li>Contacts List</li>
          </NavLink>
          <NavLink to={"/create"}>
            <li>Add Contact</li>
          </NavLink>
        </ul>
      </nav>
    </>
  );
}
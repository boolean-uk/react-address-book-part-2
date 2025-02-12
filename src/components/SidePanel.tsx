import { NavLink } from "react-router";

export default function SidePanel() {
  return (
    <>
      <nav>
        <ul>
          <NavLink to={"/"}>
            <li>Contacts List</li>
          </NavLink>
          <NavLink to={"/create"}>
            <li>Add New Contact</li>
          </NavLink>
        </ul>
      </nav>
    </>
  );
}

import { Link } from "react-router-dom";

function Navigation() {
    return (
      <div>
        
          <element>
            <Link to="/">Contacts List</Link>
          </element>
          <br></br>
          <br></br>
          <element>
            <Link to="/newContact">Add New Contact</Link>
          </element>
      </div>
    );
}

export default Navigation;
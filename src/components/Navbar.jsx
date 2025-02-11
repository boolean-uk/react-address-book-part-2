import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <Link to="/">Contact List</Link>
      <Link to="/create">Create a Contact</Link>
    </nav>
  );
}

export default Navbar; 
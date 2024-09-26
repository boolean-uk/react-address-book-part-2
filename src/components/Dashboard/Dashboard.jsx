import { Link, Outlet} from "react-router-dom";

export function Dashboard() {
return (
  <div className="dashboard-container">
    <div className="dashboard-nav">
      <div className="menu-header">Menu</div>
      <Link to="/contacts/create">Create Contact</Link>
      <Link to="/contacts">Contact List</Link>
    </div>
    <div className="dashboard-content">
      <Outlet /> 
    </div>
  </div>
);
}

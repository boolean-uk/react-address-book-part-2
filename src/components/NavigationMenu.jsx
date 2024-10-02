import { Link } from 'react-router-dom';
import '../styles/NavigationMenu.css';

function NavigationMenu() {
	return (
		<>
			<nav className="sidebar">
				<h2>Menu</h2>
				<ul>
					<li>
						<Link to="/">Dashboard</Link>
					</li>

					<li>
						<Link to="/contacts">Contacts List</Link>
					</li>

					<li>
						<Link to="/create">Add New Contact</Link>
					</li>
				</ul>
			</nav>
		</>
	);
}

export default NavigationMenu;

import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ContactList from "./components/ContactList";
import ContactDetails from "./components/ContactDetails";
import CreateContact from "./components/CreateContact";

function App() {
	return (
		<Router>
			<div className="app-layout">
				<nav className="sidebar">
					<h2>Menu</h2>
					<ul>
						<li>
							<Link to="/contacts">See Contact List</Link>
						</li>
					</ul>
					<ul>
						<li>
							<Link to="/create">Add New Contact</Link>
						</li>
					</ul>
                   
				</nav>

				<div className="main-content">
					<Routes>
						<Route
							path="/contacts"
							element={<ContactList />}
						/>
						<Route
							path="/contacts/:id"
							element={<ContactDetails />}
						/>
						<Route
							path="/create"
							element={<CreateContact />}
						/>
						<Route
							path="/contacts/:id/update"
							element={<ContactDetails />}
						/>
					</Routes>
				</div>
			</div>
		</Router>
	);
}

export default App;

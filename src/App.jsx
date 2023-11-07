import './App.css';
import { Routes, Route, Link }
import { useNavigate } from 'react-router-dom';

function App() {
    return (
        <>
        <aside>
            <nav>
                <li>
                    <Link to="/">Home</Link>
                    <Link to="/add">Add Contact</Link>
                </li>
            </nav>
        </aside>


        <Routes>
            <Route
            path="/"
            element={<Dashboard />}
            />
            <Route
            path="/view/:id"
            element={<ContactDetails />}
            />
            <Route
            path="/edit/:id"
            element={<EditContact />}
            />
            <Route
            path="/add"
            element={<AddContact />}
            />
        </Routes>
      </>
    );
}

export default App;

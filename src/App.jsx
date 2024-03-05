import { Link, Route, Routes } from "react-router-dom";
import "./App.css";
import Dashboard from "./components/Dashboard";
import ViewContact from "./components/ViewContact";
import CreateContact from "./components/CreateContact";

function App() {
  return [
    <>
      <header>
        <h1>Address Book</h1>
        <nav>
          <ul>
            <li>
              <Link to="/">Dashboard</Link>{" "}
            </li>
            <li>
              <Link to="/create">Create a contact</Link>
            </li>
          </ul>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/view/:id" element={<ViewContact />} />
        <Route path="/create" element={<CreateContact />} />
      </Routes>
    </>,
  ];
}

export default App;

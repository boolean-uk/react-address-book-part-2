import "./styles/App.css";
import Dashboard from "./components/Dashboard";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <Dashboard />
      <Outlet />
    </>
  );
}

export default App;

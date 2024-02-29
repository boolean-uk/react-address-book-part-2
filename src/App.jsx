import { BrowserRouter } from "react-router-dom";
import "./App.css";
import MenuSidebar from "./components/MenuSidebar";

function App() {
  return (
    <BrowserRouter>
      <div className="main-layout">
        <MenuSidebar />
      </div>
    </BrowserRouter>
  );
}

export default App;

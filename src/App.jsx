import { BrowserRouter } from "react-router-dom";
import "./App.css";
import MenuSidebar from "./components/MenuSidebar";

function App() {
  return (
    <BrowserRouter>
      <>
        <MenuSidebar />
      </>
    </BrowserRouter>
  );
}

export default App;

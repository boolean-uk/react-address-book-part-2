import "./App.css"
import { Route, Routes } from "react-router-dom";
import ContactsList from "./components/ContactsList";
import Menu from "./components/Menu";
import ViewContact from "./components/ViewContact";

function App() {
    return (
  
            <main className="main">
                <header className="top-bar">
                    <Menu />
                </header>

                <Routes>
                    <Route path="/" element={Menu} />
                    <Route path="/ContactsList" element={<ContactsList />} />
                    <Route path="/ViewContact/:id" element={<ViewContact />} />
                </Routes>
            </main>
        
    );
}

export default App;
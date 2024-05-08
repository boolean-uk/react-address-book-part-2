// import "./App.css"
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

                <div>                
                    <Routes>
                        <Route path="/" element={<Menu />} />
                        <Route path="/contacts" element={<ContactsList />} />
                        <Route path="/contact/:id" element={<ViewContact />} />
                    </Routes>
                </div>
            </main>
        
    );
}

export default App;
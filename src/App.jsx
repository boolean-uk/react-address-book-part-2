import "./App.css"
import { Route, Routes } from "react-router-dom";
import ContactsList from "./components/ContactsList";
import Menu from "./components/Menu";
import ViewContact from "./components/ViewContact";

function App() {
    return (
  
            <>
                <header className="top-bar">
                    <Menu />
                </header>

                <div>                
                    <Routes>
                        <Route path="/"  />
                        <Route path="/contacts" element={<ContactsList />} />
                        <Route path="/contact/:id" element={<ViewContact />} />
                    </Routes>
                </div>
            </>
        
    );
}

export default App;

import {Routes, Route, Link } from "react-router-dom"
import ContactList from "./components/ContactList";
import ContactListItem from "./components/ContactListItem";
import ContactForm from "./components/ContactForm";
import './styles/App.css';

function App() {


    return (
       <>
       <h1 className="menu">Menu</h1>
       <nav>
       <ul className="nav">
        <Link to="/"><li>Home</li></Link>
        <Link to="/contact/List"><li>Contact list</li></Link>
        <Link to="/contact/Form"><li>Add new contacts</li></Link>
       </ul>
       </nav>
       <main>
        <Routes>
            <Route path="/contact/List" element={<ContactList />}></Route>
            <Route path="/contact/Form" element={<ContactForm />} ></Route>
            <Route path="/contact/:id" element={<ContactListItem />}></Route>
        </Routes>
       </main>
       </>
    );
}

export default App;

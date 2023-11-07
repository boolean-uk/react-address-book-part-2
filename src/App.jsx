import { useEffect, useState } from "react"
import { Route, Routes, Link } from "react-router-dom"
import ContactList from "./components/ContactList";
import ContactListItem from "./components/ContactListItem";
import ContactForm from "./components/ContactForm";
import './styles/App.css';

function App() {

    const [individual, setindividual] = useState('')


    return (
       <>
       <h1>Menu</h1>
       <nav>
       <ul>
        <Link to="/"><li>Contact list</li></Link>
        <Link to="/contact/form"><li>Add new contacts</li></Link>
       </ul>
       </nav>
       <main>
        <Routes>
            <Route path="/" element={<ContactList />}></Route>
            <Route path="/contact/Form" element={<ContactForm />} ></Route>
            <Route path="/:id" element={<ContactListItem />}></Route>
        </Routes>
       </main>
       </>
    );
}

export default App;

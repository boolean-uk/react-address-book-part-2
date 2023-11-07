
import {Routes, Route, Link } from "react-router-dom"
import ContactList from "./components/ContactList";
import ContactListItem from "./components/ContactListItem";
import ContactForm from "./components/ContactForm";
import './styles/App.css';

function App() {


    return (
       <>
       <h1 className="menu">Contact Center</h1>
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

        <img className="img" src="https://www.svgrepo.com/show/90101/call-center-worker-with-headset.svg" width={300} alt="guy with headphones on" />
       </main>
       </>
    );
}

export default App;

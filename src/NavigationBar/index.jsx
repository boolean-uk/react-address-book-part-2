import { Link, Route, Routes } from 'react-router-dom';
import Contacts from "../Contacts";
import PersonProfile from "../PersonProfile";
import CreateContact from "../Contacts/components/CreateContact";


export default function NavigationBar() {

    return (
        <main className="navbar-layout">
          <section>
            <h2>Menu</h2>
            <ul>
                <li>
                    <Link to="/contacts">People</Link>
                </li>
                <li>
                    <Link to="/create">Add new contact</Link>
                </li>
            </ul>
          </section>
          <Routes>
            <Route path="/contacts" element={<Contacts/>}/>
            <Route path="contacts/view/:id/*" element={<PersonProfile/>}/>
            <Route path="create" element={<CreateContact/>}/>
        </Routes>
        </main>

      )
}  
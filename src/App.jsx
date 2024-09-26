import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Dashboard } from './components/Dashboard/Dashboard';
import CreateContactComponent from './components/Dashboard/CreateContactComponent';
import ContactListComponent from './components/Dashboard/ContactListComponent';
import { ViewContactComponent } from './components/Dashboard/ContactListComponent/ViewContactComponent';
import { EditContactComponent } from './components/Dashboard/ContactListComponent/EditContactComponent';

function App() {
    return (
      <>
        <Routes>
          <Route path="/" element={<Dashboard />}>
            <Route path="/contacts/create" element={<CreateContactComponent />} />
            <Route path="/contacts" element={<ContactListComponent />} />
            <Route
              path="/contacts/view/:contactId"
              element={<ViewContactComponent />}
            />
            <Route
              path="/contacts/edit/:contactId"
              element={<EditContactComponent />}
            />
          </Route>
        </Routes>
      </>
    );
}

export default App;

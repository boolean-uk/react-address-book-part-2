import { createContext, useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ContactInfo } from "./types";
import Layout from "./components/Layout";
import ContactList from "./components/ContactList";
import ContactDetails from "./components/ContactDetails";
import ContactUpdateForm from "./components/ContactUpdateForm";
import ContactAddForm from "./components/ContactAddForm";

const initialState: AppContextType = {
  contacts: [],
  setContacts: () => {},
  refetch: () => {},
};
interface AppContextType {
  contacts: ContactInfo[];
  setContacts: React.Dispatch<React.SetStateAction<ContactInfo[]>>;
  refetch: () => void;
}
export const AppContext = createContext<AppContextType>(initialState);
export const BASE_URL = "https://boolean-uk-api-server.fly.dev/martvu/contact";

function App() {
  const [contacts, setContacts] = useState<ContactInfo[]>([]);

  const fetchData = async () => {
    const response = await fetch(BASE_URL);
    const data = await response.json();
    setContacts(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <AppContext.Provider value={{ contacts, setContacts, refetch: fetchData}}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route path="/" element={<ContactList />} />
              <Route path="/add-contact" element={<ContactAddForm />} />
              <Route path="/contact/:id" element={<ContactDetails />} />
              <Route path="/contact/:id/edit" element={<ContactUpdateForm />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </AppContext.Provider>
    </>
  );
}

export default App;

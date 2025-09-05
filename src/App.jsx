import { createContext, useEffect, useState } from 'react';
import './App.css';
import { Link, Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import UserProfile from './components/Dashboard/Components/UserProfile';
import CreateUserForm from './components/Dashboard/Components/CreateUserForm';
import UpdateUser from './components/Dashboard/Components/UpdateUser';
export const userContext = createContext();

function App() {

    const URL = "https://boolean-uk-api-server.fly.dev";
    const user = "TestUser"
    const [people, setPeople] = useState([]);

    const fetchData = async () => {
      const response = await fetch(`${URL}/${user}/contact`);
      const jsonData = await response.json();
      setPeople(jsonData);
    };

    useEffect(() => {
    fetchData();
  }, []);

    return (
        <main className='dashboard-layout'>
            <section>
                <nav> 
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/dashboard">Contacts list</Link></li>
                        <li key='create'><Link to='/dashboard/createUser' state={{ mode: "Create"}}> Create User</Link></li>

                    </ul>
                </nav>
            </section>
            <userContext.Provider value={{people, URL, user, fetchData}}>
                <Routes>
                        <Route path="/dashboard" element={<Dashboard />}></Route>
                        <Route path="/dashboard/:id" element={<UserProfile />}></Route>
                        <Route path="/dashboard/:id/update" element={<UpdateUser />}></Route>
                        <Route path="/dashboard/createUser" element={<CreateUserForm /> }></Route>
                </Routes>
            </userContext.Provider>
        </main>
    );
}

export { App } ;

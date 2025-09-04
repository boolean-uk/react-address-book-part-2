import './App.css';

import { Routes, Route, Navigate } from 'react-router-dom'
import { createContext, useState, useEffect } from 'react'
import Dashboard from './components/Dashboard';
import ContactView from './components/ContactView';
import Welcome from './components/Welcome';

const DataContext = createContext()
const DisplayContext = createContext()
localStorage.setItem('url', 'https://boolean-uk-api-server.fly.dev/magnusgit1/contact')

function App() {

    const [data, setData] = useState([])
    const [displayForm, setDisplayForm] = useState(false)

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(localStorage.getItem('url'))
            const jsonData = await response.json()
            setData(jsonData)
        }
        fetchData()
    }, [data])

    return (
        <main className="main">
            <DataContext.Provider value={{data: data, setData: setData}}>
                <DisplayContext.Provider value={{displayForm:displayForm, setDisplayForm:setDisplayForm}}>
                    <Routes>
                        <Route path="/" element={<Navigate to="/welcome" replace />}/>
                        <Route path="/welcome" element={<Welcome/>}/>
                        <Route path="/dashboard" element={<Dashboard/>}/>
                        <Route path="/contact/:id" element={<ContactView/>}/>
                    </Routes>
                </DisplayContext.Provider>
            </DataContext.Provider>
        </main>
    );
}

export { App, DataContext, DisplayContext }

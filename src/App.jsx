import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom'
import Menu from "./components/Menu"
import Contact from './components/Contact'
import AddForm from './components/AddForm'
import Log from './components/Log/Log'

function App() {
    return (
    <Router>
        
        <>
        <Menu />
        <Routes>
            <Route path="/log" element={<Log />}  />
            <Route path="/add-contact" element= {<AddForm />} />
            <Route path="/contact/:id" element= {<Contact />} />
        </Routes>
        </>
        
    </Router>   
    )
}

export default App

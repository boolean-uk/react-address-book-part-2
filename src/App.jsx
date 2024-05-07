import { Route, Routes } from 'react-router-dom';
import './App.css';
import Aside from './components/Aside';
import MainComponent from './components/MainComponent';

function App() {
    return (
        <>
            <Aside />

            <MainComponent />
        </>
    );
}

export default App;

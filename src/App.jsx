import './App.css';
import React from 'react';
import { Outlet } from 'react-router-dom';
import Menu from './components/Menu';

function App() {
    return (
        <div className="app-container">
            <div className="menu-column">
                <Menu />
            </div>
            <div className="content-column">
                <Outlet />
            </div>
        </div>
    );
}

export default App;

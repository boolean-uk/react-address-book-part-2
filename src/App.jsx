import React from 'react';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div>
      <nav>
        <ul>
          <li><a href="/contacts">Contacts List</a></li>
          <li><a href="/add-contact">Add New Contact</a></li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
}

export default App;

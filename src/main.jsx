import React, { useState, createContext } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
    createBrowserRouter,
    RouterProvider,
    Route,
    createRoutesFromElements
} from 'react-router-dom';
import DataProvider from './DataProvider';
import ContactList from './views/ContactList/ContactList';
import CreateContactForm from './views/CreateContactForm/CreateContactForm';
import ContactView from './views/ContactView/ContactView';




const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<App />}>
            <Route index element={<ContactList />} />
            <Route path="create" element={<CreateContactForm />} />
            <Route path="contact/:id" element={<ContactView />} />
            <Route path="contact/:id/edit" element={<CreateContactForm />} />
        </Route>
    )
);

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <DataProvider>
            <RouterProvider router={router} />
        </DataProvider>
    </React.StrictMode>,
)

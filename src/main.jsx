import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import App from './App';
import ContactsList from './components/ContactsList';
import ContactDetails from './components/ContactDetails';
import AddNewContact from './components/AddNewContact';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "contacts",
        element: <ContactsList />
      },
      {
        path: "contacts/:id",
        element: <ContactDetails />
      },
      {
        path: "add-contact",
        element: <AddNewContact />
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);

/* eslint-disable no-unused-vars */
import { useState } from "react";
import { Link, Route, Routes } from "react-router-dom";

import ContactList from "./ContactList";
import ContactView from "./ContactView";
import ContactForm from "./ContactForm";

function DashBoard(props) {
  const {
    contacts,
    fetchContacts,
    deleteContact,
    updateContact,
    createContact,
  } = props;

  return (
    <>
      <div className="left-bar">
        <div className="left-bar-content">
          <h2>Menu</h2>
          <ul>
            <Link to={"/"}>
              <li className="item"></li>
            </Link>
            <Link to={"/contacts"}>
              <li className="item">Contact List</li>
            </Link>
            <Link to={"/contacts/new"} state={null}>
              <li className="item">Add New Contact</li>
            </Link>
          </ul>
        </div>
      </div>

      <div className="main">
        <div className="main-content">
          <Routes>
            <Route path="/">
              <Route
                index
                path="/contacts"
                element={
                  <ContactList contacts={contacts} fetch={fetchContacts} />
                }
              ></Route>
              <Route
                path="/contacts/:id/view"
                element={<ContactView deleteContact={deleteContact} />}
              ></Route>
              <Route
                path="/contacts/:id/edit"
                element={<ContactForm updateContact={updateContact} />}
              ></Route>
              <Route
                path="/contacts/new"
                element={<ContactForm createContact={createContact} />}
              ></Route>
            </Route>
          </Routes>
        </div>
      </div>
    </>
  );
}

export default DashBoard;

import {
    Route,
    Routes,
    Link
  } from "react-router-dom";
import React from 'react'

export function Root(props) {
    

    return (
        <>
        <section>
            <h1>Menu</h1>
            <p>
                <Link to="/">
                    Contact List
                </Link>
            </p>
            <p>
                <Link to="/addContact">
                    Add new contact
                </Link>
            </p>
        </section>
        </>
    )
}

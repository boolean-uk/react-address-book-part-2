import React from 'react'
import { useContext } from 'react'
import { AppContext } from '../../App'
import ContactList from '../ContactList/ContactList'

function DashBoard() {


    return (
        <div>
            <h3>Dashboard</h3>
            <ContactList />
        </div>
    )
}

export default DashBoard
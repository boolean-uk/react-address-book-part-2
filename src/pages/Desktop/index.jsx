import { useState } from "react";
import ContactList from "./components/ContactList"

import "./styles.css"

const sortOptions = ['', 'alphabetically desc', 'alphabetically asc']
const genderFilterOptions  = ['', 'male', 'female', 'other'];

function Desktop({contacts}) {
    const [genderFilter, setGenderFilter] = useState("")

    const [sort, setSort] = useState("")

    let shownContacts = contacts;

    if (genderFilter !== "") {
        if (genderFilter === "other") {
            shownContacts = shownContacts.filter(contact => !['male', 'female'].includes(contact.gender))
        } else {
            shownContacts = shownContacts.filter(contact => contact.gender === genderFilter)
        }
        
    }

    if (sort !== "") {
        switch (sort) {
          case 'alphabetically desc':
            shownContacts = shownContacts.sort((a, b) => b.firstName.localeCompare(a.firstName));
            break;
          case 'alphabetically asc':
            shownContacts = shownContacts.sort((a, b) => a.firstName.localeCompare(b.firstName));
            break;
        }
      }

    return (
        <main>
            <h1>Contacts</h1>
            <p>
                FILTER GENDER:
                <select id="genderFilter" onChange={e => setGenderFilter(e.target.value)}>
                    {
                        genderFilterOptions.map(filter => (
                        <option key={filter}>{filter}</option>
                        ))
                    }
                </select>
            </p>
            <p>
                SORT:
                <select id="sort" onChange={e => setSort(e.target.value)}>
                {
                    sortOptions.map(sort => (
                    <option key={sort}>{sort}</option>
                    ))
                }
                </select>
            </p>
            <ContactList contacts={shownContacts}/>
        </main>
    )
}

export default Desktop
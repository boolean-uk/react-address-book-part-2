import { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export function ViewContacts({ contacts }) {
    const [genderFilter, setGenderFilter] = useState('');

    const handleFilterChange = (e) => {
        setGenderFilter(e.target.value);
    };

    const filteredContacts = contacts.filter(contact => {
        if (genderFilter === '')
        {
            return true;
        } else if (genderFilter === 'male' && (contact.gender === 'Male' || contact.gender === 'Man'))
        {
            return true;
        } else if (genderFilter === 'female' && (contact.gender === 'Female' || contact.gender === 'Woman'))
        {
            return true;
        } else if (genderFilter === 'other' &&
            contact.gender !== 'Male' &&
            contact.gender !== 'female' &&
            contact.gender !== 'Man' &&
            contact.gender !== 'Woman'
        )
        {
            return true;
        }
        return false;
    });

    return (
        <div className='contact-list'>
            <label htmlFor="genderFilter">Filter by Gender: </label>
            <select id="genderFilter" onChange={handleFilterChange}>
                <option value="">All</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
            </select>

            <ul>
                {filteredContacts.map((contact) => (
                    <Link
                        key={contact.email}
                        to={`/${encodeURIComponent(contact.email)}`}>
                        <h3>{contact.firstName} {contact.lastName}</h3>
                    </Link>
                ))}
            </ul>
        </div>
    );
}

ViewContacts.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.object).isRequired,
};

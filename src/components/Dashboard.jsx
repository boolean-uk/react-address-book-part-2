import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Dashboard({ username }) {
    const [contacts, setContacts] = useState([]);
    const [filteredContacts, setFilteredContacts] = useState([]);
    const [filters, setFilters] = useState({
        firstName: '',
        lastName: '',
        street: '',
        city: ''
    });
    const [sortOrder, setSortOrder] = useState({
        column: '',
        order: ''
    });

    useEffect(() => {
        fetchContacts();
    }, [username]);

    useEffect(() => {
        applyFiltersAndSort();
    }, [contacts, filters, sortOrder]);

    const fetchContacts = () => {
        const url = `https://boolean-uk-api-server.fly.dev/${username}/contact`;
        fetch(url)
            .then(response => response.json())
            .then(data => {
                setContacts(data);
                setFilteredContacts(data);
            })
            .catch(error => console.error('Error fetching contacts:', error));
    };

    const handleDeleteAll = () => {
        const url = `https://boolean-uk-api-server.fly.dev/${username}/contact`;
        fetch(url, {
            method: 'DELETE',
        })
            .then(response => {
                if (response.ok) {
                    setContacts([]);
                    setFilteredContacts([]);
                } else {
                    console.error('Error deleting all contacts:', response.statusText);
                }
            })
            .catch(error => console.error('Error deleting all contacts:', error));
    };

    const handleDelete = (id) => {
        const url = `https://boolean-uk-api-server.fly.dev/${username}/contact/${id}`;
        fetch(url, {
            method: 'DELETE',
        })
            .then(response => {
                if (response.ok) {
                    setContacts(contacts.filter(contact => contact.id !== id));
                    setFilteredContacts(filteredContacts.filter(contact => contact.id !== id));
                } else {
                    console.error('Error deleting contact:', response.statusText);
                }
            })
            .catch(error => console.error('Error deleting contact:', error));
    };

    const handleFilterChange = (e) => {
        const { name, value } = e.target;
        setFilters({
            ...filters,
            [name]: value
        });
    };

    const handleSort = (column) => {
        const order = sortOrder.column === column && sortOrder.order === 'asc' ? 'desc' : 'asc';
        setSortOrder({ column, order });
    };

    const applyFiltersAndSort = () => {
        let filtered = contacts.filter(contact => {
            return (
                contact.firstName.toLowerCase().includes(filters.firstName.toLowerCase()) &&
                contact.lastName.toLowerCase().includes(filters.lastName.toLowerCase()) &&
                contact.street.toLowerCase().includes(filters.street.toLowerCase()) &&
                contact.city.toLowerCase().includes(filters.city.toLowerCase())
            );
        });

        if (sortOrder.column) {
            filtered.sort((a, b) => {
                if (a[sortOrder.column] < b[sortOrder.column]) return sortOrder.order === 'asc' ? -1 : 1;
                if (a[sortOrder.column] > b[sortOrder.column]) return sortOrder.order === 'asc' ? 1 : -1;
                return 0;
            });
        }

        setFilteredContacts(filtered);
    };

    return (
        <div>
            <h1>Welcome to the Dashboard, {username}</h1>
            <div>
                <input
                    type="text"
                    name="firstName"
                    placeholder="Filter by First Name"
                    value={filters.firstName}
                    onChange={handleFilterChange}
                />
                <input
                    type="text"
                    name="lastName"
                    placeholder="Filter by Last Name"
                    value={filters.lastName}
                    onChange={handleFilterChange}
                />
                <input
                    type="text"
                    name="street"
                    placeholder="Filter by Street"
                    value={filters.street}
                    onChange={handleFilterChange}
                />
                <input
                    type="text"
                    name="city"
                    placeholder="Filter by City"
                    value={filters.city}
                    onChange={handleFilterChange}
                />
            </div>
            <div>
                <button onClick={() => handleSort('firstName')}>Sort by First Name</button>
                <button onClick={() => handleSort('lastName')}>Sort by Last Name</button>
                <button onClick={() => handleSort('street')}>Sort by Street</button>
                <button onClick={() => handleSort('city')}>Sort by City</button>
            </div>
            {filteredContacts.length === 0 ? (
                <h1>No contacts to display</h1>
            ) : (
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredContacts.map(contact => (
                            <tr key={contact.id}>
                                <td>
                                    <Link to={`/dashboard/${contact.id}`}>
                                        {contact.firstName} {contact.lastName}
                                    </Link>
                                </td>
                                <td>
                                    <button className="delete" onClick={() => handleDelete(contact.id)}>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
            <button onClick={handleDeleteAll}>Delete All</button>
        </div>
    );
    
}

export default Dashboard;
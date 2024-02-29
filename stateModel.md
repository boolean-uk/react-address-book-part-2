State Model;

The Main object (Menu/APP) contains a list of contacts displayed in the Menu view.
Each contact in the list has a firstName, and lastName.

The contactDetails object holds the details of a selected contact, including id, firstName, lastName, street, city and Email.

The createContact object represents the form used to create a new contact, containing fields for firstName, lastName, street, and city.

{
"firstName": "Leo",
"lastName": "Boyle",
"email": "Boyd_Daugherty@gmail.com",
"street": "Bill Lock",
"city": "North Aurorestad",
"id": 1
},

Component Tree

-App: Top-level component responsible for managing application state.
contacts: List of contacts.
CreateContacts : Create a new contact

      -ContactList: Component rendering the list of contacts.
        contacts: List of contacts.


          -ContacListtItem: Component representing an individual contact in the list.
            contact: Data for the contact.

        -ContactDetails>: Component displaying detailed information about a selected contact.
          contact: Data for the selected contact.
          selectedContactId: ID of the selected contact.

      -CreateContact>: Component rendering the form for creating a new contact.
        formData: Data entered into the form fields (firstName, lastName, street, city).

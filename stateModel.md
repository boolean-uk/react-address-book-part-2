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

Updated Component Tree (Including extensions)

Component Tree:

-App (Page)
-Menu (Navbar)
-Button to navigate to Contact List
-Button to navigate to Create Contact
-Button to navigate to Delete All

-Routes
-ContactList (Page)
-Display list of contacts
-Toggle filter form to filter contacts
-Handle filtering of contacts based on input
-State:
-contacts (passed via props)
-showFilterForm (boolean)
-filterInput (string)
-Route: /contact

-CreateContact (Page)
-Form to create a new contact
-Handle form submission
-State:
-firstName (string)
-lastName (string)
-street (string)
-city (string)
-Route: /CreateContact

-ContactDetails (Page)
-Display details of a specific contact
-Button to delete the contact
-Button to toggle update form
-Form to update contact details
-Handle deletion of contact
-Handle updating of contact details
-State:
-contact (object)
-updatedContact (object)
-showUpdateForm (boolean)
-Route: /contact/:id

-DeleteALL (Page)
-Button to delete all contacts
-Handle deletion of all contacts
-State:
-None
-Route: /delete-all

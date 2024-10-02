### Base URL
https://boolean-uk-api-server.fly.dev



### Core requirements
1. A user can view a dashboard that displays a list of contacts
   - Each contact in the list should be displayed as their first and last names

2. A user can click a contact's name to view more details about that contact
   - The view should contain the contact's first and last name, as well as the contact's street and city

3. A user can create a contact via a form, accessed by clicking a "Create a contact" menu link
   - The form should create a contact with a first and last name, as well as a street and city
   - When submitted, the contact data should be sent to an API that saves it
   - The user should then be automatically navigated back to the contact list
  

### Extensions
1. Allow for deleting a contact

2. Allow for updating a contact's information
z
3. Automatically navigate to the contact list after deleting a contact

4. Automatically navigate to the single contact information view after updating a contact

5. Implement the remaining contact properties available in the API into your application

6. Use a contact's latitude and longitude geo-coordinates to render their position on a map

7. Add the ability to filter the contact list


### Page description
- Split page (dashboard), one half for menu, other for creating/viewing/editing contacts
- Menu has 2 links, one showing the contacts (view), while the other one is for creating contacts (add)
- will add support for filtering and deleting contacts (will write more in depth when I get there)


### Components
- Dashboard
- ContactsList
- ContactsListItem
- CreateContact (form)
  - sends the data to our API which saves it and navigates us back to our dashboard
  - 


### State model
- CreateContact-form 
  - Edit-Contacts
- Contacts-State
- ContactsList-State
- 
# React - Address Book Part 2

## Instructions

1. Fork and clone this repository
2. `npm ci` to install dependencies
3. `npm start` to run the application
4. Build a simple React app using the plans you created during part 1

## API

You have two choices for an API to use:

1. Use [https://jsonplaceholder.typicode.com](https://jsonplaceholder.typicode.com) (fastest option)
    - Use the `/users` resource as your contact data
    - [There is a guide for using this API](https://jsonplaceholder.typicode.com/guide/)
2. Set up your own local API using [json-server](https://www.npmjs.com/package/json-server) (more challenging)

## Core Criteria

- The [requirements outlined in part 1](https://github.com/boolean-uk/react-address-book-part-1/tree/main#requirements) are the minimum requirements for this exercise.
- Your application must match your plan. If you need to deviate, you must update your plan.
- Navigation **must** be done using routes, not conditional rendering

## Extensions

1. Allow for deleting a contact

2. Allow for updating a contact's information

3. Automatically navigate to the contact list after deleting a contact

4. Automatically navigate to the single contact information view after creating or updating a contact

5. Implement the remaining `/user` properties available in the API into your application

6. Use a contact's `lat` and `lng` geo-coordinates to render their position on a map

## Example application

**Note: Your application does not need to look like this.**

![](./_assets/address-book.gif)
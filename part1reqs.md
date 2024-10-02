# React - Address Book Part 1

## Introduction

This exercise is entirely focused on planning the development of an application. With the exception of the optional prototype instruction, this repository should not contain any application source code.

## Instructions

Using the list of requirements in the section below, create plans or diagrams that include:

- A state model **(Required)**
    - This could be a plain text description of an object with specific properties, a sample JSON object, a class diagram, a badly drawn illustration on the back of a napkin, etc.
- A component tree **(Required)**
    - This should be a simple diagram that details which React components you are going to create and where they exist in the hierarchy. Include any state that each component will be responsible for in this diagram.
- A project management board **(Optional)**
    - This could be a kanban board that lists some tasks you'll need to complete. You can use an app like Trello or GitHub Projects, or you could use sticky notes.
- A style guide **(Optional)**
    - A simple document that lists common CSS values to be used, such as text colours & fonts, button colours etc.
- A prototype app **(Optional)**
    - A very simple app that demonstrates the desired functionality. This could be entirely done in the `App` component with hard-coded state values and no styling

**Add your plans as screenshots / files to the root of this project, named appropriately so they can be easily identified. E.g. a screenshot of your component tree named `component-tree.jpg`**

## Requirements

[You must use this API for your state](https://boolean-uk-api-server.fly.dev/api-docs/), specifically the Contact endpoints. Base URL: `https://boolean-uk-api-server.fly.dev`

1. A user can view a dashboard that displays a list of contacts
    - Each contact in the list should be displayed as their first and last names
2. A user can click a contact's name to view more details about that contact
    - The view should contain the contact's first and last name, as well as the contact's street and city
3. A user can create a contact via a form, accessed by clicking a "Create a contact" menu link
    - The form should create a contact with a first and last name, as well as a street and city
    - When submitted, the contact data should be sent to an API that saves it
    - The user should then be automatically navigated back to the contact list

## Notes

- The example below demonstrates the type of functionality required
- Your app does not need to look exactly like the example below as long as it satisfies the requirements

## Example application
![](./_assets/address-book.gif)
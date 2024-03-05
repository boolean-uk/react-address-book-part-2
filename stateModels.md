
# Dashboard

```js
{
    contacts: [
        {
            city: string,
            email: string
            favouriteColour: string
            firstName: string
            gender: string
            id: number,
            jobTitle: string
            lastName: string
            latitude: number,
            longitude: number,
            profileImage: string
            street: string
        }
    ],

    updatedContacts: [
        {
            city: string
            email: string
            favouriteColour: string
            firstName: string
            gender: string
            id: number,
            jobTitle: string
            lastName: string
            latitude: number,
            longitude: number,
            profileImage: string
            street: string
        }
    ],

    username: string,
    
}

```

# ContactProfile

```js
{
        contacts: [
        {
            city: string,
            email: string
            favouriteColour: string
            firstName: string
            gender: string
            id: number,
            jobTitle: string
            lastName: string
            latitude: number,
            longitude: number,
            profileImage: string
            street: string
        }
    ],

    username: string,
    id: number,
    
    formData: {
        firstName: string
        lastName: string
        street: string
        city: string
        longitude: number,
        latitude: number,
    },

    contact: {
    
        city: string,
        email: string
        favouriteColour: string
        firstName: string
        gender: string
        id: number,
        jobTitle: string
        lastName: string
        latitude: number,
        longitude: number,
        profileImage: string
        street: string,
        
    },

}

```

# Contact

```js
{
    contact: {

        city: string,
        email: string
        favouriteColour: string
        firstName: string
        gender: string
        id: number,
        jobTitle: string
        lastName: string
        latitude: number,
        longitude: number,
        profileImage: string
        street: string,
        
    },
    username: string,
}

```


# CreateContact

```js
{
    username: string,
    
    formData: {
    firstName: string
    lastName: string
    street: string
    city: string
    longitude: number,
    latitude: number,
    },
}

```


# Menu

```js
{
    username: string,

    contacts: [
        {
            city: string,
            email: string
            favouriteColour: string
            firstName: string
            gender: string
            id: number,
            jobTitle: string
            lastName: string
            latitude: number,
            longitude: number,
            profileImage: string
            street: string
        }
    ],

    updatedContacts: [
        {
            city: string
            email: string
            favouriteColour: string
            firstName: string
            gender: string
            id: number,
            jobTitle: string
            lastName: string
            latitude: number,
            longitude: number,
            profileImage: string
            street: string
        }
    ],

}

```
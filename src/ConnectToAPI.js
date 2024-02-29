const URL = "https://boolean-api-server.fly.dev/Annemoon-de-Groen/contact"

function PostContactAPI(contact){
    console.log("Posting data...")
    const data = {
        "firstName": contact.firstName,
        "lastName": contact.lastName,
        "street": contact.street,
        "city": contact.city,
        "gender": "Male",
        "email": "rick@sanchez.com",
        "jobTitle": "Scientist",
        "latitude": 42,
        "longitude": 629,
        "favouriteColour": "#0d7f26",
        "profileImage": "https://www.gravatar.com/avatar/sdfa@fasdf.com?s=120&d=identicon"
      }
    const PostOptions = {
        method: "POST",
        headers: {
            "Content-Type" : "application/json"
        },
        body: JSON.stringify(contact)
    }
    fetch(URL, PostOptions).then((response) => {return response.json()}).then((jsonData) => {
        console.log(jsonData)
    })
}

export {PostContactAPI}
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

function Delete(contactId){
    const requestOptions = {
      method: "DELETE",
    };
  
    fetch(`${URL}/${contactId}`, requestOptions)
      .then((response) => {
        return response.json();
      })
      .then((deletedAnswer) => {
        console.log("DELETE /form json data:", deletedAnswer);
  
        // // 1. update local state by appending jsonData onto the tasks array
        // state.tasks.push(newTask);
  
  
      });
  }

function Update(contactId, data){
    const postRequestOptions = {
        method: "PUT",
        headers : {
            "Content-Type" : "application/json"
        },
        body: JSON.stringify(data)
    }
    fetch(`${URL}/${contactId}`, postRequestOptions).then((response) => {
        return response.json();
    })
}

export {PostContactAPI, Delete, Update}
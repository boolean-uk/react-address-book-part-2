import user from "../../../../react-context-api/src/assets/data/user"


export async function GetAllContacts(){
    try {
        const username = "thomaafl"
        const response = await fetch(`https://boolean-uk-api-server.fly.dev/${username}/contact`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            },
        })

        if (!response.ok) {
            throw new Error("Error in getAllContacts response: " + response.status)
        }

        const jsonData = await response.json()
        return jsonData

    } catch (error) {
        console.error("Error while fetching contacts", error)
    }

    
}

export async function CreateContact(newContact){
    try {
        const username = "thomaafl"
        fetch(`https://boolean-uk-api-server.fly.dev/${username}/contact`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newContact)
        })
    } catch(error){
        console.error("Error while creating contact", error)
    }
}

export async function DeleteContact(id){
    try {
        const username = "thomaafl"
        fetch(`https://boolean-uk-api-server.fly.dev/${username}/contact/${id}`, {
            method: "DELETE",
        })
    } catch(error){
        console.error("Error while deleting contact", error)
    }
}

export async function DeleteAllContacts(){
    try {
        const username = "thomaafl"
        fetch(`https://boolean-uk-api-server.fly.dev/${username}/contact`, {
            method: "DELETE",
        })
    } catch(error){
        console.error("Error while deleting contact", error)
    }
}

export async function UpdateContact(id, newInfo) {
    try {
        const username = "thomaafl"
        const response = await fetch(`https://boolean-uk-api-server.fly.dev/${username}/contact/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newInfo),
        });
        

        if (!response.ok) {
            throw new Error("Error in PUT contact response: " + response.status);
        }

        const jsonData = await response.json();
        return jsonData;

    } catch (error) {
        throw new Error("Error while updating a contact! " + error);
    }
}



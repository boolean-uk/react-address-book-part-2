
export async function GetAllContacts() {
    try {

        const response = await fetch("https://boolean-uk-api-server.fly.dev/john/contact", {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            },
        });

        if (!response.ok) {
            throw new Error("Error in getAllContacts response: " + response.status);
        }

        const jsonData = await response.json();
        return jsonData;


    } catch (error) {
        throw new Error("Error while fetching all contacts " + error);
    }
}

export async function CreateContact(newContact) {
    try {
        const response = await fetch("https://boolean-uk-api-server.fly.dev/john/contact", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newContact),
        });
        // console.log(newContact);

        if (!response.ok) {
            throw new Error("Error in create contact response: " + response.status);
        }

        const jsonData = await response.json();
        return jsonData;

    } catch (error) {
        throw new Error("Error while creating a contact! " + error);
    }
}

export async function DeleteAContact(id) {
    try {
        const response = await fetch(`https://boolean-uk-api-server.fly.dev/john/contact/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            },
        });
        // console.log(newContact);

        if (!response.ok) {
            throw new Error("Error in DELETE contact response: " + response.status);
        }

        const jsonData = await response.json();
        return jsonData;

    } catch (error) {
        throw new Error("Error while deleting a contact! " + error);
    }
}

export async function UpdateAContact(id, newInfo) {
    try {
        const response = await fetch(`https://boolean-uk-api-server.fly.dev/john/contact/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newInfo),
        });
        // console.log(newInfo);

        if (!response.ok) {
            throw new Error("Error in PUT contact response: " + response.status);
        }

        const jsonData = await response.json();
        return jsonData;

    } catch (error) {
        throw new Error("Error while updating a contact! " + error);
    }
}
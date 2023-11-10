import axios from "axios";

const INSTANCE = axios.create({
    baseURL: "https://boolean-api-server.fly.dev/nazartymiv/",
});

const URL = "/contact";

export async function getAllContactsAsync() {
    try {
        const response = await INSTANCE.get(URL);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

export async function getContactAsync(contactId) {
    const url = `${URL}/${contactId}`;
    try {
        const response = await INSTANCE.get(url);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

export async function postContactAsync(contactObj) {
    try {
        const response = await INSTANCE.post(URL, contactObj);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

export async function deleteContactAsync(contactId) {
    const url = `${URL}/${contactId}`;
    try {
        const response = await INSTANCE.delete(url);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

export async function putContactAsync(contactId, contactObj) {
    const url = `${URL}/${contactId}`;
    const required = ["firstName", "lastName", "street", "city"];

    const missingRequired = required.filter(
        (entry) => !Object.keys(contactObj).includes(entry)
    );

    if (missingRequired.length > 0) {
        const get = await getContactAsync(contactId);
        missingRequired.forEach((entry) => {
            contactObj[entry] = get[entry];
        });
    }

    try {
        const response = await INSTANCE.put(url, contactObj);
        return response;
    } catch (error) {
        console.error(error);
        return error;
    }
}

const baseURL = "https://boolean-uk-api-server.fly.dev/"
const githubUsername = "maaxolofsson/"

export async function get(endpoint) {
    const res = await fetch(baseURL + githubUsername + endpoint);
    const data = await res.json();
    return data
}

export async function getOne(endpoint, id) {
    const c = {
        method: 'GET'
    }
    console.log(baseURL + githubUsername + endpoint + "/" + id)
    const httpRes = await fetch(baseURL + githubUsername + endpoint + "/" + id, c);
    const data = await httpRes.json();
    return { httpRes, data }
}

export async function deleteOne(endpoint, id) {
    const c = {
        method: 'DELETE'
    }
    console.log(baseURL + githubUsername + endpoint + "/" + id)
    const httpRes = await fetch(baseURL + githubUsername + endpoint + "/" + id, c);
    const data = await httpRes.json();
    return { httpRes, data }
}

export async function post(endpoint, data) { // data = obj (json)
    const c = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }
    const httpRes = await fetch(baseURL + githubUsername + endpoint, c)
    const resData = await httpRes.json()
    return { httpRes, resData };
}

export async function put(endpoint, id, newData) { // data = obj (json)
    const c = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newData)
    }
    const httpRes = await fetch(baseURL + githubUsername + endpoint + "/" + id, c);
    const resData = await httpRes.json()
    return { httpRes, resData };
}

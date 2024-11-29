export const URL = "https://boolean-api-server.fly.dev/LAVINIABENZAR/contact"

export const post = (url, data) => {

    const options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    }

    return fetch(url, options)
}


export const get = (url) => {
    return fetch(url)
        .then((res) => res.json())
}


export const remove = async (url) => {

    const options = {
        method: 'DELETE',
    }

    const res = await fetch(url, options)
    return await res.json()
}


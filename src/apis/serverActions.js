const BASE_URL = "https://boolean-api-server.fly.dev/rafa-lopes-pt/contact";

export const getAllEntries = async () => fetch(BASE_URL);

export const addNewEntry = async (data) =>
	fetch(BASE_URL, {
		method: "POST",
		body: JSON.stringify(data),
		headers: {
			"Content-Type": "application/json",
		},
	});

export const updateEntry = async (data) =>
	fetch(BASE_URL + "/" + data?.id, {
		method: "PUT",
		body: JSON.stringify(data),
		headers: {
			"Content-Type": "application/json",
		},
	});

export const delEntry = async (data) => {
	fetch(BASE_URL + "/" + data?.id, {
		method: "DELETE",
		headers: {
			"Content-Type": "application/json",
		},
	});
};

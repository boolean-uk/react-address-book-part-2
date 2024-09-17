const BASE_URL = "https://boolean-api-server.fly.dev/andreSturesson/";

export async function fetchContacts() {
  return await fetch(BASE_URL + "contact")
    .then((response) => response.json())
    .then((data) => {
      return data;
    })
    .catch((error) => {
      console.error(error);
    });
}

/**
 * Creates a new contact.
 * @param {Object} payload - The contact data.
 * @param {string} payload.firstName - The first name of the contact.
 * @param {string} payload.lastName - The last name of the contact.
 * @param {string} payload.email - The email of the contact.
 * @param {string} payload.street - The street address of the contact.
 * @param {string} payload.city - The city of the contact.
 * @param {number} payload.latitude - The latitude of the contact's location.
 * @param {number} payload.longitude - The longitude of the contact's location.
 * @param {string} payload.favouriteColour - The favourite color of the contact.
 * @param {string} payload.profileImage - The URL of the contact's profile image.
 */
export async function createContact(payload) {
  await fetch(BASE_URL + "contact", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.error(error);
    });
}

export async function editContact(id, payload) {
  await fetch(BASE_URL + "contact/" + id, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.error(error);
    });
}

export async function deleteContact(id) {
  await fetch(BASE_URL + "contact/" + id, {
    method: "DELETE",
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.error(error);
    });
}

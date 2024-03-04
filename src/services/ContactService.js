const BASE_API_URL = "https://boolean-api-server.fly.dev/Sabbasn";

export const postContact = async (contact) => {
  const response = await fetch(BASE_API_URL + "/contact", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(contact),
  }).catch((e) => console.log(e));
  const data = await response.json();
  return data;
};

export const updateContact = async (contact) => {
  console.log(contact);
  const response = await fetch(BASE_API_URL + `/contact/${contact.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(contact),
  }).catch((e) => console.log(e));
  const data = await response.json();
  return data;
};

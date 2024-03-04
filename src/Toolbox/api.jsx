// api.js
const URL = "https://boolean-api-server.fly.dev/thegrevling/contact";

export const fetchContacts = () => {
  return fetch(URL).then((res) => res.json());
};

export const fetchOneContact = async (id) => {
  const response = await fetch(`${URL}/${id}`);
  const data = await response.json();
  return data;
}

export const createContact = async (data) => {
  const response = await fetch(URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error(`Failed to submit form: ${response.status} ${response.statusText}`);
  }

  console.log('Form submitted successfully!');
  return fetchContacts();
};

export const updateContact = async (data,id) => {
  const response = await fetch(URL+"/"+id, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error(`Failed to submit form: ${response.status} ${response.statusText}`);
  }

  console.log('Form submitted successfully!');
  return fetchContacts();
};

export const deleteContact = async (id) => {
  const response = await fetch(URL+"/"+id, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    }
  });

  if (!response.ok) {
    throw new Error(`Failed to delete contact: ${response.status} ${response.statusText}`);
  }

  console.log('Contact deleted successfully!');
};

export const getContacts = () => {
  return fetch("https://boolean-api-server.fly.dev/LinusWillmont/contact")
    .then((result) => result.json())
    .catch((error) => {
      throw error;
    });
};

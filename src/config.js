const API_BASE_URL = 'https://boolean-uk-api-server.fly.dev';
const USERNAME = 'JoneTheBuilder';

export const ENDPOINTS = {
  contacts: `${API_BASE_URL}/${USERNAME}/contact`,
  contactDetails: (id) => `${API_BASE_URL}/${USERNAME}/contact/${id}`
}; 
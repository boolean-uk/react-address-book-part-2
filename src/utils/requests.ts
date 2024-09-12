export const getRequest = async (url: string) => {
  const res = await fetch(url);
  return await res.json();
};

export const postRequest = async (url: string, data: object) => {
  const res = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  return await res.json();
};

export const deleteRequest = async (url: string) => {
  const res = await fetch(url, {
    method: 'DELETE',
  });
  return await res.json();
};


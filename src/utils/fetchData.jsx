export const getContacts = async () => {
  try {
    const response = await fetch(
      "https://boolean-api-server.fly.dev/olemarkusroland/contact"
    );
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};
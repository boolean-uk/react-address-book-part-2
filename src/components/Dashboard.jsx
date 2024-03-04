import { useEffect } from "react";
import ContactsList from "./Dashboard-componets/ContactsList.jsx";

function Dashboard(props) {
  const { contactsList, updateContactsList } = props;
  const URL = `https://boolean-api-server.fly.dev/llllllll-l/contact`;
  useEffect(() => {
    const fetchData = async () => {
      try {
        const req = await fetch(URL);
        const res = await req.json();
        updateContactsList(res);
      } catch (er) {
        console.log(
          `OBS!!! Something went wrong fething the contacts from ${URL}`
        );
      }
    };
    fetchData();
  }, [URL, updateContactsList]);

  //console.log("contactsList in DashBoard: ", contactsList);
  return (
    <div>
      <ContactsList contactsList={contactsList} />
    </div>
  );
}

export default Dashboard;

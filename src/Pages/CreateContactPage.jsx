import { useNavigate } from "react-router-dom";
import { postRequest } from "../Api";
import ContactForm from "./components/ContactForm";

export default function CreateContactPage() {
  const navigate = useNavigate();

  async function submitCallBack(contact) {
    return await postRequest("/contact", contact).then(({ data, error }) => {
      if (data) {
        navigate(`/contact/${data.id}`);
        return null;
      } else {
        return error[0];
      }
    });
  }

  return (
    <div>
      <h1>Create New Contact</h1>
      <ContactForm submitCallBack={submitCallBack} />
    </div>
  );
}

import { useNavigate } from "react-router-dom"
import ContactForm from "../../components/ContactForm"

const initialFormState =
    {
      firstName: '',
      lastName: '',
      street: '',
      city: '',
      gender: 'other',
      email: '',
      jobTitle: '',
      // Not implemented yet:
      latitude: 0,
      longitude: 0,
      favouriteColour: '#ffffff',
      profileImage: ''
    }

function CreateContact({ createNewContact }) {

    const navigate = useNavigate()

    const submitData = (userData) => {
        createNewContact(userData)
        navigate("/")
    }

    return (
        <div>
            <h1>Create Contact</h1>
            <ContactForm submitData={submitData} initialFormState={initialFormState} />
        </div>
    )
}

export default CreateContact
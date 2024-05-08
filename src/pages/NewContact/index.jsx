import { useNavigate } from "react-router-dom"

export default function NewContactPage() {
    const navigate = useNavigate()

    function handleSubmitForm(event) {
        console.log(event.target.elements)
        event.preventDefault()

        const payLoad = {
            "firstName": event.target.elements.firstName.value,
            "lastName": event.target.elements.lastName.value,
            "street": event.target.elements.street.value,
            "city": event.target.elements.city.value,
        }
        console.log('Payload:', payLoad)

        fetch("https://boolean-api-server.fly.dev/iscreamvann/contact", {
            method: "POST",
            body: JSON.stringify(payLoad),
            headers: {Accept: "application/json", "Content-Type": "application/json"}

        }).then(()=>{navigate("/")})
    }

      return (
          <form onSubmit={handleSubmitForm}>
              <FormField label="First Name" name="firstName" placeholder="Enter your First Name" />
              <FormField label="Last Name" name="lastName" placeholder="Enter your Last Name" />
              <FormField label="Street" name="street" placeholder="Enter your Street Address" />
              <FormField label="City" name="city" placeholder="Enter your city" />
              <button type="submit">Submit</button>
          </form>
      );
  }

  function FormField({ label, name, placeholder }) {
    return (
        <div>
            <label htmlFor={name}>{label}</label>
            <input type="text" name={name} id={name} placeholder={placeholder} />
        </div>
    );
}
import { useContext, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ApiContext } from "../App";

function Update() {

    const { id } = useParams();
    const {api, setcontacts, contacts} = useContext(ApiContext)
    const contact = contacts.find((x) => x.id == Number(id));
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
      firstName: `${contact.firstName}`,
      lastName: `${contact.lastName}`,
      street: `${contact.street}`,
      city: `${contact.city}`,
    });

  const handleChange = (event) => {
    const { name, value, type } = event.target;

    if (type === "checkbox") {
      setFormData({ ...formData, [name]: event.target.checked });
    } else {
      setFormData({ ...formData, [event.target.name]: event.target.value });
    }
    console.log(formData);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    console.log(formData);

    try {
      const res = await fetch(`${api}/Vegard-S/contact/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          accept: "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (res.status === 200) {
        console.log("success");
      }
      const updated = await res.json();
      setcontacts((prev) => prev.map((contact) => contact.id === Number(id) ? updated : contact));
      navigate(`/contact/${id}`);
    } catch (err) {
      console.log(err.message);
      console.log(err);
    }
  };




    return (
        <>
        <h1>Create Contact</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <div className="col-md-6 mb-3">
              <label htmlFor="firstName">
                <h3>First name:</h3>
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="col-md-6 mb-3">
              <label htmlFor="lastName">
                <h3>Last name:</h3>
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
              />
            </div>
            <div className="col-md-6 mb-3">
              <label htmlFor="street">
                <h3>Street:</h3>
              </label>
              <input
                type="text"
                id="street"
                name="street"
                value={formData.street}
                onChange={handleChange}
              />
            </div>
            <div className="col-md-6 mb-3">
              <label htmlFor="city">
                <h3>City:</h3>
              </label>
              <input
                type="text"
                id="city"
                name="city"
                value={formData.city}
                onChange={handleChange}
              />
            </div>
            <br />

            <button type="submit">
                Update
            </button>
          </div>
        </form>
        </>
    )
}

export default Update
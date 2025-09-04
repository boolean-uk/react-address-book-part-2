import { useState } from 'react'

function ContactForm({ onSubmit, initialValues }) {
  const [formData, setFormData] = useState(
    initialValues ? initialValues : {
      firstName : '',
      lastName : '',
      street : '',
      city : '',
      gender : '',
      email: '',
      jobTitle : '',
      latitude : 0,
      longitude : 0,
      favouriteColour : '',
      profileImage : ''
    }
  )

  const handleOnChange = (e) => {
    const { name, value } = e.target

    setFormData((prev) => ({
        ...prev,
        [name] : value
    }))
  }
    
  const handleSubmit = async (e) => {
    e.preventDefault();
    onSubmit(formData);
  }
    
  return (
    <form onSubmit={handleSubmit}>
        <label htmlFor="firstName">First Name </label>
        <input
            type="text"
            id="firstName"
            name="firstName"
            onChange={handleOnChange}
            value={formData['firstName']}
        />
        <label htmlFor="lastName">Last Name </label>
        <input
            type="text"
            id="lastName"
            name="lastName"
            onChange={handleOnChange}
            value={formData['lastName']}
        />
        <label htmlFor="street">Street </label>
        <input
            type="text"
            id="street"
            name="street"
            onChange={handleOnChange}
            value={formData['street']}
        />
        <label htmlFor="city">City </label>
        <input
            type="text"
            id="city"
            name="city"
            onChange={handleOnChange}
            value={formData['city']}
        />
        <label htmlFor="gender">Gender </label>
        <input
            type="text"
            id="gender"
            name="gender"
            onChange={handleOnChange}
            value={formData['gender']}
        />
        <label htmlFor="email">Email </label>
        <input
            type="text"
            id="email"
            name="email"
            onChange={handleOnChange}
            value={formData['email']}
        />
        <label htmlFor="jobTitle">Job Title </label>
        <input
            type="text"
            id="jobTitle"
            name="jobTitle"
            onChange={handleOnChange}
            value={formData['jobTitle']}
        />
        <label htmlFor="latitude">Latidude </label>
        <input
            type="text"
            id="latitude"
            name="latitude"
            onChange={handleOnChange}
            value={formData['latitude']}
        />
        <label htmlFor="longitude">Longitude </label>
        <input
            type="text"
            id="longitude"
            name="longitude"
            onChange={handleOnChange}
            value={formData['longitude']}
        />
        <label htmlFor="favouriteColour">Favourite Color </label>
        <input
            type="text"
            id="favouriteColour"
            name="favouriteColour"
            onChange={handleOnChange}
            value={formData['favouriteColour']}
        />
        <label htmlFor="profileImage">Profile Image</label>
        <input
            type="text"
            id="profileImage"
            name="profileImage"
            onChange={handleOnChange}
            value={formData['profileImage']}
        />
        <div style={{ display: "flex", justifyContent: "center" }}>
            <button 
                type="submit" 
                style={{
                    marginLeft: 400,
                    marginTop: 10,
                    padding: "0.5rem 1rem",
                    border: "none",
                    borderRadius: "6px",
                    backgroundColor: "#1976d2",
                    color: "white",
                    fontSize: "1rem",
                    cursor: "pointer"
                }}
            >
                Submit
            </button>
        </div>
    </form>
  )
}

export default ContactForm
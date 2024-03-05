function ContactForm({contact, handleChange, handleSubmit}){

    return (
        <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-group">
            <label htmlFor="firstName">Firstname</label>
            <input type="text" value={contact.firstName} name="firstName" id="firstName" onChange={handleChange} placeholder="Arya" />
        </div>
        <div className="form-group">
            <label htmlFor="lastName">Lastname</label>
            <input type="text" value={contact.lastName} name="lastName" id="lastName" onChange={handleChange} placeholder="Stark" />
        </div>
        <div className="form-group">
            <label htmlFor="gender">Gender</label>
            <input type="text" value={contact.gender} name="gender" id="gender" onChange={handleChange} placeholder="female" />
        </div>
        <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="text" value={contact.email} name="email" id="email" onChange={handleChange} placeholder="arya@winter.fell" />
        </div>
        <div className="form-group">
            <label htmlFor="jobTitle">Job title</label>
            <input type="text" value={contact.jobTitle} name="jobTitle" id="jobTitle" onChange={handleChange} placeholder="assassin" />
        </div>
        <div className="form-group">
            <label htmlFor="street">Street</label>
            <input type="text" value={contact.street} name="street" id="street" onChange={handleChange} placeholder="Joffreys cage 42" />
        </div>
        <div className="form-group">
            <label htmlFor="city">City</label>
            <input type="text" value={contact.city} name="city" id="city" onChange={handleChange} placeholder="Kings landing" />
        </div>
        <div className="form-group">
            <label htmlFor="profileImage">Image url</label>
            <input type="text" value={contact.profileImage} name="profileImage" id="profileImage" onChange={handleChange} placeholder="Paste image link on google" />
        </div>
        <div className="form-group">
            <label htmlFor="latitude">Latitude</label>
            <input type="number" value={contact.latitude} name="latitude" id="latitude" onChange={handleChange} />
        </div>
        <div className="form-group">
            <label htmlFor="longitude">Longitude</label>
            <input type="number" value={contact.longitude} name="longitude" id="longitude" onChange={handleChange} />
        </div>
        <button type="submit">Submit contact!</button>
        </form>
    )
}

export default ContactForm
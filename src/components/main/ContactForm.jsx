function ContactForm({ handleSubmit, formData, setFormData, submitText }) {
  const handleChange = (event) => {
    const { name, value, type } = event.target;

    if (type === "checkbox") {
      let tempData = formData[name].filter((v) => v != value);
      if (event.target.checked) {
        tempData.push(value);
      }
      setFormData({ ...formData, [name]: tempData });
    } else {
      setFormData({ ...formData, [event.target.name]: event.target.value });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="firstName">First name:</label>
      <input
        type="text"
        name="firstName"
        value={formData.firstName}
        onChange={handleChange}
      />
      <label htmlFor="lastName">Last name:</label>
      <input
        type="text"
        name="lastName"
        value={formData.lastName}
        onChange={handleChange}
      />
      <label htmlFor="gender">Gender:</label>
      <input
        type="text"
        name="gender"
        value={formData.gender}
        onChange={handleChange}
      />
      <label htmlFor="jobTitle">Job Title:</label>
      <input
        type="text"
        name="jobTitle"
        value={formData.jobTitle}
        onChange={handleChange}
      />
      <label htmlFor="street">Street:</label>
      <input
        type="text"
        name="street"
        value={formData.street}
        onChange={handleChange}
      />
      <label htmlFor="city">City:</label>
      <input
        type="text"
        name="city"
        value={formData.city}
        onChange={handleChange}
      />
      <input className="fancy" type="submit" value={submitText} />
    </form>
  );
}

export default ContactForm;

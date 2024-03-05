function CreateContactForm() {
    return (
      <div className="create-form-div">
        <h2>Create contact</h2>

        <form className="create-form">
          <label htmlFor="fname-input">First name:</label>
          <input id="fname-input" name="fname-input" type="text" />
          <br />
          <br />

          <label htmlFor="lname-input">Last name:</label>
          <input id="lname-input" name="lname-input" type="text" />
          <br />
          <br />

          <label htmlFor="street-input">Street:</label>
          <input id="street-input" name="street-input" type="text" />
          <br />
          <br />

          <label htmlFor="city-input">City:</label>
          <input id="city-input" name="city-input" type="text" />
          <br />
          <br />
        </form>
      </div>
    );
}

export default CreateContactForm
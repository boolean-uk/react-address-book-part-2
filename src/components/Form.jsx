function Form(props) {
  
  const {handleSubmit} = props

  return (
    <div className="form" onSubmit={handleSubmit}>
      <h1>Create Contact</h1>
      <form>
        <label>
          FirstName
          <input name="firstname" type="text" ></input>
        </label>
        <label>
          LastName
          <input name="lastname" type="text"></input>
        </label>
        <label>
          Street
          <input name="street" type="text"></input>
        </label>
        <label>
          City
          <input name="city" type="text"></input>
        </label>
        <input className="form__submit" type="submit" value="SUBMIT" />
      </form>
    </div>
  );
}
export default Form;

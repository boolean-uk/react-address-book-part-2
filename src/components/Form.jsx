function Form() {
  return (
    <>
      <h1>Create Contact</h1>
      <form>
        <label>
          FirstName
          <input name="Firstname" type="text"></input>
        </label>
        <label>
          LastName
          <input name="Lastname" type="text"></input>
        </label>
        <label>
          Street
          <input name="street" type="text"></input>
        </label>
        <label>
          City
          <input name="city" type="text"></input>
        </label>
        <input className="form__submit" type="submit" value="Create" />
      </form>
    </>
  );
}
export default Form;

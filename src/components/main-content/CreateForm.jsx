
export default function CreateForm({ handleSubmit }){
  console.log(handleSubmit)
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="firstName">First Name</label>
        <input type="text" id="firstName" name="firstName" placeholder="Enter First Name" />
      </div>
        <div>
        <label htmlFor="lastName">Last Name</label>
        <input type="text" id="lastName" name="lastName" placeholder="Enter Last Name" />
      </div>
        <div>
        <label htmlFor="street">Address</label>
        <input type="text" id="street" name="street" placeholder="Enter Address" />
      </div>
      <div>
        <label htmlFor="city">City</label>
        <input type="text" id="city" name="city" placeholder="Enter your City" />
      </div>
      <button id='button' type="submit">Create</button>
    </form>
  )
}



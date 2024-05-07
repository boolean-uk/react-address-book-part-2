import '/src/style/CreateForm.css'
export default function CreateForm(){
  return (
    <form>
      <div>
        <label>First Name</label>
        <input placeholder="Enter First Name"></input>
      </div>
      <div>
        <label>Last Name</label>
        <input placeholder="Enter Last Name"></input>
      </div>
      <div>
        <label>Address</label>
        <input placeholder="Enter Address"></input>
      </div>
      <div>
        <label>City</label>
        <input placeholder="Enter your City"></input>
      </div>
      <button id='button'>Create</button>
    </form>
  )
}
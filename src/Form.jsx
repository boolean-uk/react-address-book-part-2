function ContactForm({handleInput, handleOnSubmit, formData}){

    return (
        <form className="form" onSubmit={handleOnSubmit}>
        <label>Firstname: <input 
        type="text" 
        name="firstName" 
        value= {formData.firstName}
        onChange={handleInput}/></label>
        <label>Lastname: <input 
        type="text" 
        name="lastName" 
        value= {formData.lastName}
        onChange={handleInput}/></label>
        <label>Email: <input 
        type="text" 
        name="email" 
        value= {formData.email}
        onChange={handleInput}/></label>
        <label>Job Title: <input 
        type="text" 
        name="jobTitle" 
        value= {formData.jobTitle}
        onChange={handleInput}/></label>
        <label>Gender: <input 
        type="text" 
        name="gender" 
        value= {formData.gender}
        onChange={handleInput}/></label>
        <label>City: <input 
        type="text" 
        name="city" 
        value= {formData.city}
        onChange={handleInput}/></label>
        <label>Street: <input 
        type="text" 
        name="street" 
        value= {formData.street}
        onChange={handleInput}/></label>
        
        <input type="color" name="favouriteColour" value={formData.favouriteColour} onChange={handleInput}/>


        <input className="form_submit" type="submit" value="Submit form"/>

    </form>
    )
}

export default ContactForm
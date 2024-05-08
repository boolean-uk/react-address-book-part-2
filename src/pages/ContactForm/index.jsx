export default function ContactForm() {
    return(
        <form>
            <input type="text" name="firstName" id="firstName"placeholder="First Name..."/>
            <input type="text" name="lastName" id="lastName" placeholder="Last Name..."/>
            <input type="text" name="street" id="street" placeholder="Street..."/>
            <input type="text" name="city" id="city" placeholder="City..."/>
            <button type="submit">Submit</button>
        </form>
    )
}
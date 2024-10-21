import { Link } from "react-router-dom"

function Menu(){
    return(
        <main>
            <h2>Menu</h2>
            <section>
                <Link to= "/contacts">Contacts List</Link>
            </section>
            <section>
                <Link to= "/contacts/add">Add Contact</Link>
            </section>
        </main>
    )   
}

export default Menu;
import { useContext } from "react"
import { DataContext } from "../App"
import Contact from "./Contact"

function ContactList() {
    const context = useContext(DataContext)

    return(
        <main>
            <table>
                <tbody>
                    {context.users.map((user, index) => 
                        <Contact key={index}  user={user} handleDeleteUser={context.handleDeleteUser}/>
                    )}
                </tbody>
            </table>
        </main>
    )
}

export default ContactList
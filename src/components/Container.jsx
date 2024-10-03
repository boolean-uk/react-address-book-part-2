import Menu from "./Menu";
import ContactList from "./ContactList";
import '../css/Container.css'

function Container() {

    return (
        <div id="main-container">
            <Menu></Menu>
            <ContactList></ContactList>
        </div>
    );
}

export default Container;
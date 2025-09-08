
import { useContext, useState} from "react"
import { MyContext } from "../App"

export default function Delete({contact}){
    const context = useContext(MyContext)


    const deleteId = async (person) => {
        console.log(person)
    fetch(`https://boolean-uk-api-server.fly.dev/emazau/contact/${person.id.toString()}`, {
      method: 'DELETE',
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      context.setDeletee(!context.deletee);

    })
    .catch(error => {
      console.error('There was a problem with the fetch operation:', error);
    });

    }

    return (<>
            <a><span onClick={() => deleteId(contact)}>Delete</span></a> &#160;&#160;&#160;

    </>);
}
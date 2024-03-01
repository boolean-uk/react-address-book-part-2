import { baseUrl } from "../../../Utils/apiUtils"
import "./ConfirmDeleteAction.css"

const ConfirmDeleteAction = ({content, setContent, refreshContacts}) => {
    const deleteContact = async (contactId) => {
        const request = {
            method: "DELETE",
            headers: {
                "Content-type": "application/json"
              },
        }
        await fetch(baseUrl + "/" + contactId, request)
        await refreshContacts()
        setContent(undefined)
    }

    return (
        <dialog id="confirmDeleteModal" open={content}>
            <div>
                <p>You are about to delete the contact entry for {content?.firstName} {content?.lastName}</p>
                <p>Are you sure you want to delete this entry?</p>
                <div className="confirm-cancel-button-container">
                    <button id="delete" onClick={() => deleteContact(content?.id)}>Confirm</button>
                    <button id="cancel" onClick={() => setContent(undefined)}>Cancel</button>
                </div>
            </div>
        </dialog>
    )
}

export default ConfirmDeleteAction
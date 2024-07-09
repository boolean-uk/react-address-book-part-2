import { useNavigate } from 'react-router-dom'
import { API_URL, DetailsItemProps } from '../../../model'

export default function DetailsItem({ contact }: DetailsItemProps) {
    const navigate = useNavigate()

    const deleteContact = async () => {
        const deleteContact = await fetch(API_URL + `/${contact.id}`, {
            method: 'DELETE',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
        })

        const deleteContent = await deleteContact.json()
        console.log(deleteContent)
        navigate('/')
        window.location.reload()
    }

    return (
        <div className='detail-wrapper'>
            <div className='detail'>
                <div>
                    <img src={contact.profileImage} />
                </div>
                <p>
                    {contact.firstName} {contact.lastName}
                </p>
                <p>
                    {contact.street}, {contact.city}
                </p>
                <button onClick={deleteContact}>Delete Contact</button>
            </div>
        </div>
    )
}

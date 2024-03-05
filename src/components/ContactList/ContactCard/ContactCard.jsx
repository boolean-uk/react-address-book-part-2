import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import "./ContactCard.css"

const ContactCard = ({contact, toggleDeleteModal}) => {
    const [imageLoaded, setImageLoaded] = useState(true)
    const navigate = useNavigate()
    
    const handleNavigation = (id) => {
        navigate(`/contacts/${id}`)
    }

    return (
        <>
        <button 
            className="deleteButton" 
            onClick={() => toggleDeleteModal(contact)}>
                <img 
                    src="https://uxwing.com/wp-content/themes/uxwing/download/user-interface/recycle-bin-icon.png"
                    alt="Rubbish bin icon"
                    loading="lazy"
                />
            </button>
        <div 
        style={{border: `solid 5px ${contact.favouriteColour}`, boxShadow: `2px 8px 16px ${contact.favouriteColour}`}}
        onMouseEnter={(e) => (e.currentTarget.style.boxShadow = `4px 24px 48px ${contact.favouriteColour}`)}
        onMouseLeave={(e) => (e.currentTarget.style.boxShadow = `2px 8px 16px ${contact.favouriteColour}`)}
        className="card" 
        onClick={() => handleNavigation(contact.id)}
        >
            {imageLoaded && <img 
                src={contact.profileImage} 
                alt="profile picture"
                loading="lazy"
                onLoad={() => setImageLoaded(true)}
                onError={() => setImageLoaded(false)}
            />}
            <div className="card-container">
                <div className="card-title">
                    <h2>{contact.firstName} {contact.lastName}</h2>
                    {contact.jobTitle && <p>{contact.jobTitle}</p>}
                </div>
                {contact.email && <p>{contact.email}</p>}
                {(contact.street && contact.city) && 
                    <p>{contact.street}, {contact.city}</p>
                }
            </div>
        </div>
        </>
    )
}

export default ContactCard
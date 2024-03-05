import { useLocation } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'


export default function ViewContact() {
  const location = useLocation()
  const { contact } = location.state
  const navigate = useNavigate()
    
  return (
    <div className="contact-info-item">
      <header> {`${contact.firstName} ${contact.lastName}`} </header>
      <ul className="item">
        <li><span className="point">Hometown:</span> {contact.city}</li>
        <li><span className="point">Street:</span> {contact.street}</li>
      </ul>
      {/* Back button without defining function */}
      <button className="back-button" type="button" onClick={() => navigate('/')}>Back</button>
    </div>
  )
}



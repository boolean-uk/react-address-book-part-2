import { useNavigate } from 'react-router-dom'
import './style.css'

function SideBar(props) {
  const navigate = useNavigate()
  
  return (
    <nav>
      <h2>Sidebar</h2>
      <ul className="sidebar-list">
        <li onClick={() => navigate('/')}>Contacts List</li>
        <li onClick={() => navigate('/create')}>
          Create New Contact <span className='hover-right'>+</span>
        </li>
      </ul>
    </nav>
  )
}

export default SideBar
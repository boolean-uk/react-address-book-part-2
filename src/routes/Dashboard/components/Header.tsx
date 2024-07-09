import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

export default function Header() {
    const navigate = useNavigate()

    return (
        <div className='header'>
            <Link
                to={'/'}
                style={{
                    padding: '10px',
                    textDecoration: 'none',
                }}
            >
                <span
                    style={{
                        color: 'black',
                    }}
                >
                    Contact List
                </span>
            </Link>
            <button onClick={() => navigate('/add')}>Add New Contact</button>
        </div>
    )
}

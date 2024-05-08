import { Link } from 'react-router-dom'

export default function Nav () {
    return (
        <nav className="bg-outrun-blue p-5">
        <h2 className='text-4xl text-outrun-pink'>Menu</h2>
        <ul className='bg-outrun-violet p-2 rounded-md my-5'>
        <Link to='/contact-list'><li className='text-outrun-pink'>Contacts List</li></Link>
        <Link to='/add-new-contact'><li className='text-outrun-pink'>Add New Contact</li></Link>
        </ul>
        </nav>
    )
}
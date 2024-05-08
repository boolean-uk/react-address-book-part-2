import { Link } from 'react-router-dom'

export default function Nav () {
    return (
        <nav className="bg-outrun-blue p-5">
        <h2 className='text-4xl text-outrun-pink'>Menu</h2>
        <ul className="flex-col flex gap-3 my-5">
        <Link to='/contact-list'><li className='rounded-md text-outrun-pink bg-outrun-violet p-2'>Contacts List</li></Link>
        <Link to='/add-new-contact'><li className='rounded-md text-outrun-pink bg-outrun-violet p-2'>Add New Contact</li></Link>
        </ul>
        </nav>
    )
}
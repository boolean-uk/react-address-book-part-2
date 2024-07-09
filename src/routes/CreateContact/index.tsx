import { CreateContactProps } from '../../model'
import ContactForm from './components/ContactForm'

export default function CreateContact({ contacts }: CreateContactProps) {
    return (
        <div className='detail-wrapper'>
            <h2>Create Contact</h2>
            <ContactForm contacts={contacts} />
        </div>
    )
}

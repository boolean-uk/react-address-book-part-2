import { DashboardProps } from '../../model'
import ContactList from './components/ContactList'
import Header from './components/Header'

export default function Dashboard({ contacts }: DashboardProps) {
    return (
        <div>
            <Header />
            <ContactList contacts={contacts} />
        </div>
    )
}

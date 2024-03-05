import { Link } from 'react-router-dom'

export default function ContactElement({ info, index }) {
    return (
        <li>
            <Link to={'/view/' + index}>{info.firstName + " " + info.lastName}</Link>
        </li>
    )
}

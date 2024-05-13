import '../App.css';
import { useEffect, useState } from 'react';

export default function contactDetails({ contact }) {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [contactDetail, setContactDetail] = useState()

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
        
        if (contact) {
            fetch(`https://boolean-uk-api-server.fly.dev/homonoviscoding/contact/${contact}`)
                .then(response => response.json())
                .then(setContactDetail)
        }

    }, [contact])
    console.log(contact)

    if (!contactDetail) {
        return <p>No Contact Selected</p>
    }

    return (

        <>
            <header className="left-header">
                <h1>{contactDetail.firstName} {contactDetail.lastName}</h1>
            </header>

            <section className='main-section'>
                <ul>
                    <li>{ contactDetail.street } {contactDetail.city}</li> 
                </ul>
            </section>
        </>

    )
}
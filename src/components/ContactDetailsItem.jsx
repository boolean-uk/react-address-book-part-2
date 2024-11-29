export default function ContactDetailsItem(props) {
    const { contact } = props

    return (
        <>
            <h2>{contact.firstName} {contact.lastName}</h2>

            <img src={`${contact.profileImage}`} />

            <summary>
                <h3>Gender</h3>
                <em>{contact.gender}</em>
            </summary>

            <summary>
                <h3>Job</h3>
                <em>{contact.jobTitle}</em>
            </summary>

            <summary>
                <h3>Location</h3>
                <em>{contact.street}, {contact.city}</em>
            </summary>

            <summary>
                <h3>E-mail</h3>
                <em>{contact.email}</em>
            </summary>

            <figure>
                <div style={{ backgroundColor: `${contact.favouriteColour}`, padding: '2rem' }}></div>
                <figcaption>{`${contact.firstName}'s favourite colour`}</figcaption>
            </figure>

            <iframe src={`https://maps.google.com/maps?q=${contact.latitude},${contact.longitude}&t=&z=15&ie=UTF8&iwloc=&output=embed`} ></iframe>
        </>
    )
}
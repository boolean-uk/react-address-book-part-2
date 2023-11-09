// components
import Map from "./Map";

const ContactInfo = ({ contact }) => {
    return (
        <div className="contactInfo">
            <div className="contactInfo__topBlock">
                <img
                    src="https://static.vecteezy.com/system/resources/thumbnails/009/292/244/small/default-avatar-icon-of-social-media-user-vector.jpg"
                    alt="contact-photo"
                    className="contactInfo__topBlock-photo"
                />
                <div className="contactInfo__mainInfo">
                    <h2 className="contactInfo__mainInfo-name">
                        {contact.firstName} {contact.lastName}
                    </h2>
                    <p className="contactInfo__mainInfo-jobTitle">
                        {contact.jobTitle}
                    </p>
                </div>
            </div>
            <div className="contactInfo__content">
                <section className="contactInfo__item">
                    <h3 className="contactInfo__item-title">Email</h3>
                    <p className="contactInfo__item-text">{contact.email}</p>
                </section>
                <section className="contactInfo__item">
                    <h3 className="contactInfo__item-title">Street</h3>
                    <p className="contactInfo__item-text">{contact.street}</p>
                </section>
                <section className="contactInfo__item">
                    <h3 className="contactInfo__item-title">City</h3>
                    <p className="contactInfo__item-text">{contact.city}</p>
                </section>
                <section className="contactInfo__item">
                    <h3 className="contactInfo__item-title">Gender</h3>
                    <p className="contactInfo__item-text">{contact.gender}</p>
                </section>
            </div>
            <Map center={{ lat: contact.latitude, lng: contact.longitude }} />
        </div>
    );
};

export default ContactInfo;

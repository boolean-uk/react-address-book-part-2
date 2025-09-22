import React, {useContext} from 'react';
import {FormContext} from "./ContactForm.jsx";

function ContactDetail(props) {
    const {setValue, getValue} = useContext(FormContext);
    return (
        <div>
            <h2>{props.display}</h2>
            <input type="text" name="name"
                   value={getValue(props.id)}
                   onChange={(e) => {
                       return setValue(props.id, e.currentTarget.value);
                   }}
            />
        </div>
    );
}

export default ContactDetail;
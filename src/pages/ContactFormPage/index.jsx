import "./style.css";

// components
import AdditionalHeader from "../../components/Headers/AdditionalHeader";
import { useState } from "react";

const ContactFormPage = () => {
    const [form, setForm] = useState({
        firstName: "",
        lastName: "",
        street: "",
        city: "",
        gender: "",
        email: "",
        jobTitle: "",
        latitude: "",
        longitude: "",
    });

    const submitForm = (e) => {
        e.preventDefault();
    };

    const handleChange = (event) => {
        const { name, value } = event.target;

        setForm({ ...form, [name]: value });
    };

    return (
        <div className="contactForm">
            <AdditionalHeader />

            <form onSubmit={submitForm} className="contactForm__form">
                <label className="form__item">
                    <span className="form__item-title">
                        First Name<span>*</span>
                    </span>
                    <input
                        value={form.firstName}
                        onChange={handleChange}
                        type="text"
                        name="firstName"
                        required
                        className="form__item-input"
                        placeholder="Enter your first name..."
                    />
                </label>
                <label className="form__item">
                    <span className="form__item-title">
                        Last Name<span>*</span>
                    </span>
                    <input
                        value={form.lastName}
                        onChange={handleChange}
                        type="text"
                        name="lastName"
                        required
                        className="form__item-input"
                        placeholder="Enter your last name..."
                    />
                </label>
                <label className="form__item">
                    <span className="form__item-title">
                        Email<span>*</span>
                    </span>
                    <input
                        value={form.email}
                        onChange={handleChange}
                        type="text"
                        name="email"
                        required
                        className="form__item-input"
                        placeholder="Enter your email..."
                    />
                </label>
                <label className="form__item">
                    <span className="form__item-title">Gender</span>
                    <label>
                        <input
                            checked={form.gender === "male"}
                            onChange={handleChange}
                            value="male"
                            type="radio"
                            name="gender"
                            className="form__item-radio"
                        />
                        <span>Male</span>
                    </label>
                    <label>
                        <input
                            checked={form.gender === "female"}
                            onChange={handleChange}
                            value="female"
                            type="radio"
                            name="gender"
                            className="form__item-radio"
                        />
                        <span>Female</span>
                    </label>
                </label>
                <label className="form__item">
                    <span className="form__item-title">street</span>
                    <input
                        value={form.street}
                        onChange={handleChange}
                        type="text"
                        name="street"
                        className="form__item-input"
                        placeholder="Enter your street..."
                    />
                </label>
                <label className="form__item">
                    <span className="form__item-title">City</span>
                    <input
                        value={form.city}
                        onChange={handleChange}
                        type="text"
                        name="city"
                        className="form__item-input"
                        placeholder="Enter your city..."
                    />
                </label>
                <label className="form__item">
                    <span className="form__item-title">Job title</span>
                    <input
                        value={form.jobTitle}
                        onChange={handleChange}
                        type="text"
                        name="jobTitle"
                        required
                        className="form__item-input"
                        placeholder="Enter your job title..."
                    />
                </label>
                <label className="form__item">
                    <span className="form__item-title">You location</span>
                    <input
                        value={form.latitude}
                        onChange={handleChange}
                        type="text"
                        name="latitude"
                        required
                        className="form__item-input"
                        placeholder="Enter latitude..."
                    />
                    <input
                        value={form.longitude}
                        onChange={handleChange}
                        type="text"
                        name="longitude"
                        required
                        className="form__item-input"
                        placeholder="Enter longitude..."
                    />
                </label>
                <div className="form__buttons">
                    <button type="reset" className="form__buttons-clear">
                        Clear Form
                    </button>
                    <button type="submit" className="form__buttons-submit">
                        Submit Form
                    </button>
                </div>
            </form>
        </div>
    );
};

export default ContactFormPage;

import { useState } from "react";
import FormItem from "./FormItem";

import { formStructure } from "../../../utils/formStructure";

const Form = () => {
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

    // functions

    const submitForm = (e) => {
        e.preventDefault();
    };

    const handleChange = (event) => {
        const { name, value } = event.target;

        setForm({ ...form, [name]: value });
    };

    const clearForm = () =>
        setForm({
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

    // render
    return (
        <form onSubmit={submitForm} className="contactForm__form">
            {formStructure.map((item, index) => (
                <FormItem
                    key={index}
                    data={item}
                    form={form}
                    handleChange={handleChange}
                />
            ))}
            <div className="form__buttons">
                <button
                    type="reset"
                    onClick={clearForm}
                    className="form__buttons-clear"
                >
                    Clear Form
                </button>
                <button type="submit" className="form__buttons-submit">
                    Submit Form
                </button>
            </div>
        </form>
    );
};

export default Form;

import { useState } from "react";
import { useNavigate } from "react-router";

// data
import { formStructure } from "../../../data/formStructure";
import { initialState } from "../../../data/initialState";

// components
import FormItem from "./FormItem";

const Form = ({ submitPostRequest, setLastContact }) => {
    const [form, setForm] = useState(initialState);

    const navigate = useNavigate();

    // functions

    const submitForm = (e) => {
        e.preventDefault();

        submitPostRequest(form);
        setLastContact(form.email);
        clearForm();
        navigate("/");
    };

    const handleChange = (event) => {
        const { name, type, value } = event.target;

        type === "number"
            ? setForm({ ...form, [name]: parseInt(value) })
            : setForm({ ...form, [name]: value });
    };

    const clearForm = () => setForm(initialState);

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

const FormItem = ({ data, form, handleChange }) => {
    return (
        <>
            {data.type === "radio" ? (
                <label className="form__item">
                    <span className="form__item-title">{data.title}</span>
                    {data.elements.map((item, index) => (
                        <label key={index}>
                            <input
                                checked={form[data.name] === item.toLowerCase()}
                                onChange={handleChange}
                                value={item.toLowerCase()}
                                type={data.type}
                                name={data.name}
                                className="form__item-radio"
                            />
                            <span>{item}</span>
                        </label>
                    ))}
                </label>
            ) : (
                <label className="form__item">
                    <span className="form__item-title">
                        {data.title}
                        {data.required && <span>*</span>}
                    </span>
                    <input
                        value={form[data.name]}
                        onChange={handleChange}
                        type={data.type}
                        name={data.name}
                        required={data.required}
                        className="form__item-input"
                        placeholder={data.placeholder}
                    />
                </label>
            )}
        </>
    );
};

export default FormItem;

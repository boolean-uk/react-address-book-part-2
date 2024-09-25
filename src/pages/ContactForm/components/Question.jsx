function Question(props) {
    const { question, value, setValue } = props

    return (
        <section>
            <label htmlFor={question}>{question}: </label>
            <input
                type="text"
                id={question}
                name={question}
                onChange={e => setValue(e.target.value)}
                value={value}
            />
        </section>
    )
}

export default Question

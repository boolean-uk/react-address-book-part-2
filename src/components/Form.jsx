import Inputs from "./Inputs"

export default function Form(props) {
    const { handleSubmit, formData, handleChange } = props

    return (
        <>
            <form onSubmit={handleSubmit}>
                <Inputs 
                    formData={formData}
                    handleChange={handleChange}
                />
            </form>
        </>
    )
}
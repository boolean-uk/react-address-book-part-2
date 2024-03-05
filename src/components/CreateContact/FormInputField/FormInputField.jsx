import { useContext } from 'react'
import { formContext } from '../Context.js'

const FormInputField = ({labelText, fieldId}) => {
    const {dataObject, handleChange} = useContext(formContext)

    return (
        <label>
            {labelText}: <br/>
            <input 
            id={fieldId}
            value={dataObject[fieldId]}
            onChange={(e) => handleChange(e)}
            />
        </label>
    )
}

export default FormInputField
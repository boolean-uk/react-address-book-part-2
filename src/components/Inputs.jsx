import { useLocation } from "react-router-dom"

export default function Inputs(props) {
    const { formData, handleChange } = props

    const location = useLocation()

    return (
        <>
            <div>
                <label htmlFor="firstName">First Name</label>
                <input 
                    type="text" 
                    name="firstName" 
                    value={formData.firstName} 
                    onChange={handleChange}
                />
            </div>
            
            <div>
                <label htmlFor="lastName">Last Name</label>
                <input 
                    type="text" 
                    name="lastName" 
                    value={formData.lastName}
                    onChange={handleChange}
                />
            </div>

            <div>
                <label htmlFor="street">Street</label>
                <input 
                    type="text" 
                    name="street" 
                    value={formData.street} 
                    onChange={handleChange}
                />
            </div>

            <div>
                <label htmlFor="city">City</label>
                <input 
                    type="text" 
                    name="city" 
                    value={formData.city} 
                    onChange={handleChange}
                />
            </div>
        
            <button type="submit">
                {location.pathname.includes('update') ? 'Update' : 'Create'}
            </button>
        </>
    )
}
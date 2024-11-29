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

            <div>
                <label htmlFor="city">Profile Image (URL)</label>
                <input 
                    type="url" 
                    name="profileImage" 
                    value={formData.profileImage} 
                    onChange={handleChange}
                />
            </div>

            <div>
                <label htmlFor="city">Gender</label>
                <input 
                    type="text" 
                    name="gender" 
                    value={formData.gender} 
                    onChange={handleChange}
                />
            </div>

            <div>
                <label htmlFor="city">Job</label>
                <input 
                    type="text" 
                    name="jobTitle" 
                    value={formData.jobTitle} 
                    onChange={handleChange}
                />
            </div>

            <div>
                <label htmlFor="city">Favourite Colour</label>
                <input 
                    type="color" 
                    name="favouriteColour" 
                    value={formData.favouriteColour} 
                    onChange={handleChange}
                />
            </div>

            <div>
                <label htmlFor="city">E-mail</label>
                <input 
                    type="email" 
                    name="email" 
                    value={formData.email} 
                    onChange={handleChange}
                />
            </div>

            <div>
                <label htmlFor="city">Latitude</label>
                <input 
                    type="number" 
                    name="latitude" 
                    value={formData.latitude} 
                    onChange={handleChange}
                />
            </div>

            <div>
                <label htmlFor="city">Longitude</label>
                <input 
                    type="number" 
                    name="longitude" 
                    value={formData.longitude} 
                    onChange={handleChange}
                />
            </div>
        
            <button type="submit">
                {location.pathname.includes('update') ? 'Update' : 'Create'}
            </button>
        </>
    )
}
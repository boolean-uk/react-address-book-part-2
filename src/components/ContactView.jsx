import { useParams, useNavigate} from 'react-router-dom'
import Header from './Header'

function ContactView({contacts, RemoveElement}){
    const {id} = useParams()
    let navigate = useNavigate();
    
    function handleDelete(){
        RemoveElement(id)
        navigate('/')
      }
      
      function handleUpdate(){
        navigate('/edit/'+id)
      }

    


    if(id !== undefined){ 
        try{const {firstName, lastName, street, city, profileImage, gender,email, jobTitle, latitude, longitude, favouriteColour} = (contacts.filter(contact=>(contact.id)==id))[0]

    return(<>
    <Header title={"Contact"}/>
        <div className='container'>
                  
            <div className='inline'>
            <h3 className={'name'}>{firstName} {lastName}</h3>
            <p className={'gender'}><strong>Gender:</strong> {gender}</p>
            <p className={'email'}><strong>Email:</strong> {email}</p>
            <p className={'address'}><strong>Street:</strong> {street}</p>
            <p  className={'address'}><strong>City:</strong> {city}</p>
            <p className={'jobTitle'}><strong>JobTitle:</strong> {jobTitle}</p>
            <p className={'favouriteColour'}style={{color:favouriteColour}}><strong>favouriteColour:</strong> {favouriteColour}</p>
            </div>
            <div className='inline'>
                <img src={profileImage}/>
            </div><br></br>
            <button className='inline ' onClick={()=>handleUpdate()}>Edit contact</button>
            <button className='inline btn-delete ' onClick={()=>handleDelete()}>Delete contact</button>
        </div>        
</>
    )
}catch(error){
        console.log(error)
        navigate("/")
    }}
        
    
}

export default ContactView
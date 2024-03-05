import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function Update() {
    const {id} = useParams();

    const [values, setValues] = useState({
        id: id,
        firstName: '',
        lastName:'',
        street:'',
        city:''
    })
    useEffect(()=> {
        axios.get('http://localhost:3002/contacts/' +id)
        .then(res => {
            setValues({...values, firstName: res.data.firstName, lastName: res.data.lastName,
            street: res.data.street, city: res.data.city})
        })
        .catch(err => console.log(err))

    }, [])

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.put('http://localhost:3002/contacts/' +id, values)
        .then(res => {
            navigate(`/contact-detail/${res.data.id}`);
        })
        .catch(err => console.log(err))
    }

  return (
    <div className='d-flex w-100 justify-content-center align-items-center'>
        <div className='w-50 border bg-secondary text-white p-5'>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor='firstName'>First Name:</label>
                    <input type='text' name='name' className='form-controll' placeholder='Enter First Name' value={values.firstName} onChange={e => setValues({...values, firstName: e.target.value})}/>
                </div>
                <div>
                    <label htmlFor='lastName'>Last Name:</label>
                    <input type='text' name='name' className='form-controll' placeholder='Enter Last Name' value={values.lastName} onChange={e => setValues({...values, lastName: e.target.value})}/>
                </div>
                <div>
                    <label htmlFor='street'>Street:</label>
                    <input type='text' name='name' className='form-controll' placeholder='Enter the street name' value={values.street} onChange={e => setValues({...values, street: e.target.value})}/>
                </div>
                <div>
                    <label htmlFor='lastName'>City:</label>
                    <input type='text' name='name' className='form-controll' placeholder='Enter city name' value={values.city} onChange={e => setValues({...values, city: e.target.value})}/>
                </div><br/>
                <button className='btn btn-info'>Update</button>
            </form>

        </div>


    </div>
  )
}

export default Update
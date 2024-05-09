import './App.css'
import { useState } from 'react'

function Form({ children, header, handleSubmit }) {
  return (
    <form onSubmit={handleSubmit}>
      <h3>{header}</h3>

      {children}
    </form>
  )
}

function TextInput({ value, name, placeholder, onChange }) {
  return (
    <div>
      <label htmlFor={name}>{placeholder}</label>
      <input onChange={onChange} type='text' value={value} name={name} placeholder={placeholder} />
    </div>
  )
}

function MessageForm() {
  const [formData, setFormData] = useState({
    message: ''
  })

  const runSubmit = (e) => {
    e.preventDefault()
    alert('Yay! Submitted!')
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value
    })
  }

  return (
    <Form header='Random Form' handleSubmit={runSubmit}>
      <TextInput
        name='message'
        placeholder='Your message'
        value={formData.message}
        onChange={handleChange}
      />
    </Form>
  )
}

function LoginForm() {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Submitted the user details')
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value
    })
  }

  return (
    <Form header='Login' handleSubmit={handleSubmit}>
      <TextInput
        name='username'
        placeholder='Username'
        value={formData.username}
        onChange={handleChange}
      />

      <TextInput
        name='password'
        placeholder='Password'
        value={formData.password}
        onChange={handleChange}
      />
    </Form>
  )
}

function App() {
  return (
    <main className='container'>

      <MessageForm />

      <LoginForm />

    </main>
  )
}

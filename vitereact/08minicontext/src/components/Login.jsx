import React from 'react'
import { useState, useContext } from 'react'
import Usercontext from '../context/Usercontext'


const login = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const {setUser} = useContext(Usercontext);

    const handleSubmit = (e) => {
        e.preventDefault();
        setUser({username, password})
    }
  return (
    <div>
        <h2>Login</h2>
        <input type="text"
        value={username}
        onChange={ (e) => setUsername(e.target.value)}
        placeholder='username' />
        <input type="text" 
           value={password}
        onChange={ (e) => setPassword(e.target.value)}
        placeholder='Password' />
        <button
        className='p-2 bg-yellow-300' onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default login

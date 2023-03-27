import axios from 'axios'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './register.css'


const Registerpage = () => {
  const [errorMessage,setErrorMessage]=useState(null)
 const [data,setData] = useState({
  username:"",
  email:"",
  password:"",
  confirm_password:'',
  phone_number:"",

 })
 console.log(data)

  function signupUser(e) {

        e.preventDefault()
        axios.post('http://127.0.0.1:8000/register/',
        data
        ).then(e=>{console.log(e)}).catch(e=>{})



  }
const handleChange =(e)=>{
setData({...data,[e.target.name]:e.target.value})
}
  return (
    <div id='signup-app'>
    <div className='box'>
      <form className='signup-form' onSubmit={signupUser}>
        <input type="text" value={data.username} onChange={handleChange}
         tabIndex="1" name='username' placeholder="Username" />
        <input type="text" value={data.email} onChange={handleChange}
         tabIndex="1" name='email' placeholder="Email" />
         <input type="text" value={data.phone_number} onChange={handleChange}
         name='phone_number' tabIndex="1" placeholder="phone_number" />
        <input type="password" value={data.password} onChange={handleChange}
         name='password' tabIndex="1" placeholder="Password" />
        <input type="password" value={data.confirm_password} onChange={handleChange}
         name='confirm_password' tabIndex="1" placeholder="Confirm Password" />

        { errorMessage && <p className='error-message'>{errorMessage}</p>}

        <input type="submit" className="btn btn-login" value="Signup" />
        <p className='signupNavigation'>Have an Account? <Link to='/login'>Login</Link> </p>
      </form>
    </div>
  </div>
  )
}

export default Registerpage
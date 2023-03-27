import axios from 'axios'
import React, { createContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import jwt_decode from "jwt-decode";

const Authcontext =createContext()
export const AuthcontextProvider = ({children}) => {

const [user,setUser] = useState(null)
const navigate = useNavigate()
useEffect(()=>{
    const user  = JSON.parse(localStorage.getItem('currentUser')) || null
    setUser(user)
},[])

const login = async (user,password)=>{
  return await axios.post("http://127.0.0.1:8000/api/token/",
    {
      email:user,
      password:password
    }
    ).then(e=>{
      const token = e.data.access
      const decode = jwt_decode(token)
      const data =JSON.stringify(decode)
      localStorage.setItem('currentUser',data)
      setUser(decode)
      navigate('/home')
    })
}
const logout =()=>{
    localStorage.removeItem('currentUser');
    setUser(null)
    navigate('/')
}
  return (
    <Authcontext.Provider value={{user,login,logout}}>
        {children}
    </Authcontext.Provider>
  )
}
export default Authcontext
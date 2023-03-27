import React from 'react'
import './Navbar.css'
import { useContext } from 'react'
import Authcontext from '../../context/Authcontext'

const Navbar = () => {
  
  const {user}=useContext(Authcontext)

  return (
    <div className='navbar'>
        <div className='center'><h1>Hello {user?.username}</h1></div>
    </div>
  )
}

export default Navbar
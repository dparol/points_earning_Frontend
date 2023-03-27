import React, { useContext } from 'react'
import './sidebar.css'
import {AiFillHome} from 'react-icons/ai'
import {CgProfile} from 'react-icons/cg'
import {BiTask} from 'react-icons/bi'
import {BiCoinStack} from 'react-icons/bi'
import Authcontext from '../../context/Authcontext'
import { useNavigate } from 'react-router-dom'

const Sidebar = () => {
    const {logout} = useContext(Authcontext)
    const navigate =useNavigate()
  return (
    
        <div className='sidebar'>
            <ul className='sideobject'>
                <li className='listbar' onClick={()=>navigate('/home')}><AiFillHome style={{margin:'5px'}}/> Home</li>
                <li className='listbar' onClick={()=>navigate('/')}><CgProfile style={{margin:'5px'}}/> Profile</li>
                <li className='listbar' onClick={()=>navigate('/')}><BiCoinStack style={{margin:'5px'}}/>Points</li>
                <li className='listbar' onClick={()=>navigate('/home')}><BiTask style={{margin:'5px'}}/>Task</li>
                
                <li className='listbar' onClick={logout}>Logout</li>
            </ul>
        </div>
     )
}

export default Sidebar
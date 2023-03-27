import React from 'react'
import './sidebar.css'
import {AiOutlinePlus} from 'react-icons/ai'
import {AiFillHome} from 'react-icons/ai'

const Adminsidebar = () => {
  return (
    <div className='sidebar'>
    <ul className='sideobject'>
        <li className='listbar'><AiFillHome style={{margin:'5px'}}/> Home</li>
        <li className='listbar'><AiOutlinePlus style={{margin:'5px'}}/> Add Apps</li>

    </ul>
</div>
  )
}

export default Adminsidebar
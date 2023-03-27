import React from 'react'
import Task from '../../components/Task/Task'
import Navbar from '../../components/Navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
import './Taskpage.css'


const Taskpage = () => {
  
  
  return (
    <div>
      <Navbar/>
      <div className='main-container'>
        <Sidebar/>
        <div className='adminbody'>
         <Task/> 
        </div>
      </div>
      </div>
  )
}

export default Taskpage
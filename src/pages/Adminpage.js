import React from 'react'
import Admin from '../components/Admin/Admin'
import Navbar from '../components/Navbar/Navbar'
import Adminsidebar from '../components/sidebar/Adminsidebar'
import './adminpage.css'

const Adminpage = () => {
  return (
    <div>
      <Navbar/>
      <div className='main-container'>
        <div className='sidebar'>
        <Adminsidebar/>
        </div>
        <div className='adminbody'>
         <Admin/>
          
        </div>
      
        
      </div>
      </div>
  )
}

export default Adminpage
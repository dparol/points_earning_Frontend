import React from 'react'
import AdminAddPoints from '../components/Admin/AdminAddPoints'
import Navbar from '../components/Navbar/Navbar'
import Adminsidebar from '../components/sidebar/Adminsidebar'
import './adminpage.css'

const AdminAddPointspage = () => {
  return (
    <div>
    <Navbar/>
    <div className='main-container'>
      <div className='sidebar'>
      <Adminsidebar/>
      </div>
      <div className='adminbody'>
       <AdminAddPoints/>
        
      </div>
    
      
    </div>
    </div>
  )
}

export default AdminAddPointspage
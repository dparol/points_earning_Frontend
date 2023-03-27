import React from 'react'
import './admin.css'
import {BsCardImage} from 'react-icons/bs'
import { useLocation } from "react-router-dom";

import Admin from './Admin'

const AdminAddPoints = () => {
  const { state } = useLocation();

  return (
    <div className='main'>
   <Admin 
        app_img={state.app_img}
        app_link={state.app_link}
        app_name={state.app_name}
        app_category={state.app_category}
        sub_cat={state.sub_cat}

        />
   </div>
  )
}

export default AdminAddPoints
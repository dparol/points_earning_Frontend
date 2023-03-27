import React, { useEffect, useState,useRef } from 'react'
import './admin.css'
import {BsCardImage} from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'

import axios from 'axios'




const Admin = ({app_name,app_img,app_link,app_category,sub_cat,Add_points=null}) => {
    const fileRef = useRef(null);
    const navigate = useNavigate()


    const [errorMessage,setErrorMessage]=useState(null)
    const [data,setData] = useState({
        app_name: "",
        app_link: "",
        app_category: "",
        sub_cat: "",
        points: "",
        app_img:""
        
    })
    console.log(data)
   
    //  function newapp(e) {
   
    //        e.preventDefault()
    //        axios.post('http://127.0.0.1:8000/admin/newapp',
    //        data
    //        ).then(e=>{console.log(e)}).catch(e=>{})
   
   
   
    //  }
     const imghandle = (e) => {
        const file = e.target.files[0];
        console.log(file)
        if (file) return handleChange(file);
        
      };
   const handleChange =(e)=>{
   setData({...data,[e.target.name]:e.target.value})
   }
  return (
    <div className='main'>
        <form >
        <div className='subone' style={{cursor:'pointer'}} onClick={() => fileRef.current.click()}>
            <BsCardImage style={{fontSize:'200px'}}/>
            <input type="file"   ref={fileRef} name='app_img' hidden onChange={handleChange}/>
        </div>
        <div className='subtwo'>
            <div >
                <input type="text" className='inputbox' style={{width:'300px',height:'20px', color:'black',border:'2px solid black'}} name='app_name' value={data.app_name} onChange={handleChange}/>
                <select className='dropdown'  onChange={handleChange} >
             <option name='app_category' value={data.app_category}>ENTERTAIMENT</option>
             <option name='app_category' value={data.app_category}>UTILITY</option>
             <option name='app_category' value={data.app_category}>TRAVEL</option>
             <option name='app_category' value={data.app_category}>LIFESTYLE</option>
             <option name='app_category' value={data.app_category}>GAME</option>
             <option name='app_category' value={data.app_category}>Business</option>
             <option name='app_category' value={data.app_category}>EDUCATION</option>
            </select>
            </div>
            <div>
            <input type="text" style={{width:'300px',height:'20px', color:'black',border:'2px solid black'}} name='app_link' onChange={handleChange} value={data.app_link}/>
            
            <select className='dropdown'   onChange={handleChange} >
             <option  value={data.app_category}>SOCIAL_MEDIA</option>
             <option value={data.app_category}>E-COMMERCE</option>
             <option value={data.app_category}>Streaming</option>
            
            </select>
            </div>
        </div>
        <div className='subthree'>
            <button className='points'>
                {Add_points?<a onClick={()=>navigate('/admin/addpoints',{state:{app_name,app_img,app_link,app_category,sub_cat,Add_points}})}>Add_points</a>:null}
                </button>
        </div>
        </form>
    </div>
  )
}

export default Admin


import React from 'react'
import { useNavigate } from 'react-router-dom'
import "./AppBar.css"

const AppBar = ({app_name,app_img,app_link,points,viewDetails=null}) => {
    const navigate = useNavigate()
  return (
    <div className="card">
            <div className="imagepart">
              <div className="imagebox">
                <img className="imgclass" src={"http://127.0.0.1:8000"+app_img} style={{objectFit:'cover'}} alt="" />
              </div>
            </div>
            <div className="textpart">
              <div className="appname">
                <span>{app_name}</span>
              </div>
              <div className="applink">
                {viewDetails?<a onClick={()=>navigate('/home/task',{state:{app_img,app_link,app_name,points}})}>
                  view details &gt;
                </a>:<a href={app_link}>
                    {app_link}
                </a>

                }
              </div>
            </div>
            <div className="pointpart">
              <div className="pointbox">
                <span>{points} Points</span>
              </div>
            </div>
          </div>
  )
}

export default AppBar
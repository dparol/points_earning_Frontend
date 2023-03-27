import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AppBar from "../components/AppBar/AppBar";
import Navbar from "../components/Navbar/Navbar";
import Sidebar from "../components/sidebar/Sidebar";
import "./Homepage.css";

export const Homepage = () => {
  const [data,setData] =useState([])
  const navigate = useNavigate()
  useEffect(() => {
    const controller = new AbortController();
    const fetch = () => {
      axios
        .get("http://127.0.0.1:8000/apps/listallapps/", {
          signal: controller.signal,
        })
        .then((e) => {
          console.log(e);
          setData(e.data)
        })
        .catch((e) => {
          console.log(e);
        });
    };

    fetch()
    return () => {
      controller.abort();
    };
  }, []);

  return (
    <div>
      <Navbar />
      <div className="main-container">
          <Sidebar />
        <div className="home">
          {data.map(e=>(
            <AppBar app_name={e.app_name} app_img={e.app_img} app_link={e.app_link} points={e.points} viewDetails/>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Homepage;

import axios from "axios";
import React, { useContext, useRef } from "react";
import { BsImage } from "react-icons/bs";
import { useLocation } from "react-router-dom";
import Authcontext from "../../context/Authcontext";
import AppBar from "../AppBar/AppBar";
import "./Task.css";
const Task = () => {
  const { state } = useLocation();
  const { user } = useContext(Authcontext);
  const fileRef = useRef(null);

  const handleChange = (e) => {
    const file = e.target.files[0];
    console.log(file);
    if (file) return hanldeUpload(file);
  };
  const hanldeUpload = async (file) => {
    console.log(user)
    await axios
      .post(
        "http://127.0.0.1:8000/apps/createpoints/" + user.id,
        { screen_shot: file,
        user:user.username },
        { headers: { "Content-Type": "multipart/form-data" } }
      )
      .then((e) => {
        console.log(e);
      })
      .catch((e) => console.log(e));
  };

  return (
    <div
      style={{
        background: "rgb(214, 214, 216)",
        padding: "50px",
        height: "75%",
      }}
    >
      <AppBar
        app_img={state.app_img}
        app_link={state.app_link}
        app_name={state.app_name}
        points={state.points}
      />
      <div className="second">
        <div className="imagesec" onClick={() => fileRef.current.click()}>
          <input
            type="file"
            placeholder="share you screen shot"
            hidden
            ref={fileRef}
            onChange={handleChange}
          />
          <BsImage size={"125px"} />
          <span>Upload screenshots to complete the tasks</span>
        </div>
      </div>
    </div>
  );
};

export default Task;

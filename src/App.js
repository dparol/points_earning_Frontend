
import './App.css';
import { Routes, Route, useNavigate } from "react-router-dom";
import Homepage from './pages/Homepage'
import Loginpage from './pages/Loginpage';
import Registerpage from './pages/Registerpage';
import Adminpage from './pages/Adminpage';
import AdminAddPointspage from './pages/AdminAddPointspage';
import Taskpage from './pages/Task/Taskpage';
import { useContext, useEffect } from 'react';
import Authcontext from './context/Authcontext';


function App() {
  const {user} = useContext(Authcontext)
  const navigate =useNavigate()
  const Protected =({children})=>{
useEffect(()=>{
  if(!user)navigate('/')
},[])
      return children
  }
  return (
    <div>
      <Routes>
        <Route
          exact
          path="/"
          element={
          
                <Loginpage />
            
          }
          />
          <Route path="/register" element={<Registerpage/>}/>
          <Route path="/home" element={<Protected><Homepage/></Protected> }/>
          <Route path="/admin" element={<Adminpage/>}/>
          <Route path="/admin/addpoints" element={<AdminAddPointspage/>}/>
          <Route path="/home/task" element={<Taskpage/>}/>

        </Routes>
    </div>
  );
}

export default App;

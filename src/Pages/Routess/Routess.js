import { Routes,Route } from "react-router-dom";
import Home from '../Home/Home';
import About from '../About/About';
import Gallery from '../Gallery/Gallery';
import Service from '../Service/Service';
import Profile from '../Profile/Profile';
import StudentDetails from "../StudentDetails/StudentDetails";
import Login from "../Login/Login";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import Logout from "../Logout/Logout";

import './Routess.module.scss';

const Routess=()=>{

    return(
      <Routes>
        <Route path="/" element={<ProtectedRoute Component={Home}/>}/>
        <Route path="/Login" element={<Login/>}/>
         <Route path="/Home" element={<ProtectedRoute Component={Home}/>}/>
         <Route path="/About" element={<ProtectedRoute Component={About}/>}/>
         <Route path="/Gallery" element={<ProtectedRoute Component={Gallery}/>}/>
         <Route path="/Service" element={<ProtectedRoute Component={Service}/>}/>
         <Route path="/Profile" element={<ProtectedRoute Component={Profile}/>}/>
         <Route path="/Logout" element={<ProtectedRoute Component={Logout}/>}/>
         <Route path="/student_details" element={<ProtectedRoute Component={StudentDetails}/>}/>
      </Routes>

    )
}

export default Routess;
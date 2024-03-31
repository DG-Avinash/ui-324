import { useEffect, useState } from "react";


const StudentDetails=()=>{
     
    //const[studDetails,setStudDetails]=useState({});
   
     const studentData=localStorage.getItem('candidateDtls');
     const studData=JSON.parse(studentData);
    
    return(<>
  
    <h1> This is Student Details Page</h1>
     <h1>student_id:{studData.sid}</h1>
     <h1>student_Name:{studData.name}</h1>
     <h1>student_Email:{studData.Email}</h1>
     <h1>student_Mobile:{studData. Mobile}</h1>
     <h1>student_Gender:{studData.Gender}</h1>
     <h1>student_Address:{studData.Address}</h1>
     
    </>)
}


export default StudentDetails;

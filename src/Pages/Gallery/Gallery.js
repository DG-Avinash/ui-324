import { useState,useEffect } from 'react';
import styles from './Gallery.module.scss';
//import data from '../Student_details';
import { useNavigate } from 'react-router-dom';
import {redirectPage} from '../../Helper/Helper';

const studentData=[
             {'sid':1,'name':'Santosh','Email':'santosh@gmail.com','mobile':'956982654','Gender':'Male','Address':'pune'},
             {'sid':2,'name':'Ashish','Email':'Ashish@gmail.com','mobile':'956982654','Gender':'Male','Address':'pune'},
             {'sid':3,'name':'Avinash','Email':'Avinash@gmail.com','mobile':'956982654','Gender':'Male','Address':'pune'},
             {'sid':4,'name':'Akashada','Email':'Akshada@gmail.com','mobile':'956982654','Gender':'Male','Address':'pune'},
             {'sid':5,'name':'Rushila','Email':'Rushila@gmail.com','mobile':'956982654','Gender':'Male','Address':'pune'},
           ]

const studentData1=[
             {'sid':6,'name':'Santosh123','Email':'santosh@gmail.com','mobile':'956982654','Gender':'Male','Address':'pune'},
             {'sid':7,'name':'Ashish123','Email':'Ashish@gmail.com','mobile':'956982654','Gender':'Male','Address':'pune'},
             {'sid':8,'name':'Avinash123','Email':'Avinash@gmail.com','mobile':'956982654','Gender':'Male','Address':'pune'},
             {'sid':9,'name':'Akashada123','Email':'Akshada@gmail.com','mobile':'956982654','Gender':'Male','Address':'pune'},
             {'sid':10,'name':'Rushila123','Email':'Rushila@gmail.com','mobile':'956982654','Gender':'Male','Address':'pune'},
           ]


const Gallery=()=>
{
 const[studData,setStudData]=useState(studentData);
 const[studData1,setStudData1]=useState(studentData1);

 const navigate=useNavigate(); //

/************************* filter ****************************/
const filterData = studData?.filter((item) =>item)
const finalFilterData=filterData.map((item)=>item.name)
//console.log('filterData####',finalFilterData);

/************************* Push ****************************/

const finalData=[];

studData.map((item)=>{
     const objData={
        sid:item.sid,
        name:item.name,
        Email:item.Email,
        Mobile:item.mobile,
        Gender:item.Gender,
        Address:item.Address
     }
     finalData.push(objData);
     })

     studData1.map((item)=>{
      const objData1={
         sid:item.sid,
         name:item.name,
         Email:item.Email,
         Mobile:item.mobile,
         Gender:item.Gender,
         Address:item.Address
      }
      finalData.push(objData1);
      })
  console.log('FinalData######',finalData)

 /************************* Sorting ****************************/

 const sortData= finalData?.sort((a,b) => {
  return ((a.name < b.name) ? 1 : -1) // sorting data
})

 console.log('sortData@@@@@',sortData);

return(
    <div className={styles.profileMainWrapper}>
       <h1> STudent Details..!</h1>
       {sortData.slice(0,3).map((item,index)=>{
    return(<div className={styles.profileFirst} key={index}>
         <p><span>Sid:</span>{item.sid}</p>
         <p><span>Name:</span>{item.name}</p>
         <p><span>Email:</span>{item.Email}</p>
         <p><span>Mobile:</span>{item.mobile}</p>
         <p><span>Gender:</span>{item.Gender}</p>
         <p><span>Address:</span>{item.Address}</p>
         <p><button onClick={()=>redirectPage('candidateDtls',item,'/student_details',navigate)}>View </button></p>
    </div>)})}
 </div>
   
  )
}

export default Gallery;
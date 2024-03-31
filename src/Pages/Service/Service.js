import { useEffect, useState } from 'react';
import styles from './Service.module.scss';
import {getaxiosStudentDetails} from '../../Services/Service';
import axios from "axios";


const Service=()=>
{
  const[studDetails,setStudDetails]=useState();
    
const getCustomersData = () => {
  axios
      .get("https://jsonplaceholder.typicode.com/photos")
      .then(data =>
         {if(data.status===200)
          {
           setStudDetails(data.data);
          }
         })
      .catch(error => console.log(error));
};


const getStudentDetails=async()=>{
   try{
   const response= await getaxiosStudentDetails();
    if(response.statusCode===200)
    {
      setStudDetails(response);
      console.log(response); // Success Response
    }
    else{
       console.log(response); // Error 
    }
    }
   catch(err){
       console.log(err);
          }
        }
  
  useEffect(()=>{
    getStudentDetails();
    getCustomersData();
  },[])


  return <>
      {studDetails?.slice(0,10)?.map((item,index)=>{
    return <div className={styles.mainBoxWrapper} key={index}>
        <p>Album Id:{item.albumId}</p>
        <p>Id:{item.id}</p>
        <p>Title:{item.title}</p>
        <p>humbnail Url:{item.thumbnailUrl}</p>
        <p>Url:{item.url}</p>

      </div>})}
  </>
}
export default Service;

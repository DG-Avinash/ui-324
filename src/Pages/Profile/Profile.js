// import './Profile.module.scss'
import React, { useState,useEffect } from 'react';
import styles from './Profile.module.scss';
import User from '../../component/User/User';
import ViewProfile from '../../component/ViewProfile/ViewProfile';


const Profile=()=>
{

const[userData,setUserData]=useState();

 const user=()=>{
    console.log('User Function calling...!');
    const userName="Avinash Kanerkar";
    setUserData(userName);
 }

 //console.log('userData@@@@',userData);



   return(
   <>
    <div className={styles.topSection}>
       <button className='btn btn-danger' onClick={()=>user()}>Users</button>{' '}
       <button className='btn btn-success'>Profile Details</button>
    </div>
    <div className={styles.sections}>
       <div className={styles.LeftSection}>
       <User userData={userData}/>
       </div>
       <div className={styles.RightSection}>
          <ViewProfile/>
       </div>
    </div>
   </>

   )
}
export default Profile;
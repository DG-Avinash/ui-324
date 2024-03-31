import React, { useState,useEffect } from 'react';
import { useContext } from 'react'; 
import {commonData} from '../../App';
import './Home.css';
import Header from '../../component/Header/Header'
import LeftSection from '../../component/LeftSection/LeftSection';
import RightSection from '../../component/RightSection/RightSection';
import Footer from '../../component/Footer/Footer';



const Home=()=>
{
  const [welcomeMsg, setWelcomeMsg] = useState('gdfdg');
  const userName=useContext(commonData)
//  console.log('userName@@@',userName.userData)

   function abc()
   {
      console.log('abc function calling...');
   }
 

   const year=2030;
   const orgName="developer guru";
   //const welcomeMsg="Welcome";
   const courseName=['HTML','CSS','BOOOTSTRAP','JAVASCRIPT','REACTJS'];
   const studDetails={'Name':'Avinash','Email':'Avinash@gmail.com','Mobile':9922784377}
   const noDataErrorMsg=true; // flag value

   useEffect(() => {
     console.log('Useeffect calling...');
     setWelcomeMsg('Welcome');
     setWelcomeMsg('Welcome1');
     setWelcomeMsg('Welcome2');
     abc();
  },[]);


   return(
   <>
   <div>
      <h1>Welcome,{userName.userData}</h1>
     {/* <h1> {welcomeMsg} to Home Page</h1> */}
     {/* <button className='btn btn-danger'>Click Me</button> */}
     {/* <button onClick={abc}>Click Me</button> */}
    <Header/>
    <LeftSection courses={courseName}/>
    <RightSection studentInfo={studDetails} noDataErrorMsg={noDataErrorMsg}/>
    <Footer
    year1={year} 
    orgName={orgName}/>
    </div>
  
    </>
      
   ) 
}
export default Home;
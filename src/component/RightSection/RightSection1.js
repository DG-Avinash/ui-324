import { useContext } from 'react';
import { commonData } from '../../App';

import {styles} from './RightSection.module.scss';

const RightSection1=(Props)=>{
  const studData=Props.studentData;
  const userName=useContext(commonData);
    
   console.log('Props',studData.studentInfo.Name);
    return <>
    <h1>Welcome,{userName.userData}</h1>
  <p><span>Name: </span>{studData.studentInfo.Name}{' '}</p>
    <p><span>Email: </span>{studData.studentInfo.Email}{' '}</p>
    <p><span>Mobile: </span>{studData.studentInfo.Mobile}{' '}</p>
    </>

}
export default RightSection1;


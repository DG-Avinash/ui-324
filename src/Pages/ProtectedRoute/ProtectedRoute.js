
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {styles} from './ProtectedRoute.module.scss';

const ProtectedRoute=(Props)=>
{
  console.log('Props@@@@',Props);
  const {Component}=Props;
  const navigate=useNavigate();

  useEffect(()=>{
     let login= localStorage.getItem('loginValue');
     if(!login) // false /true
     {
      navigate('/Login'); // true
     }
  });

  return (
    <div>
        <Component/>
    </div>
  )
}
export default ProtectedRoute;
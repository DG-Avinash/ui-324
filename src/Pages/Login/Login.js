
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Login.module.scss';

const Login = () => {
  const navigate=useNavigate();
  const dashboardLogin = () => {
    localStorage.setItem('loginValue', true);
    navigate('/');
  }

  useEffect(()=>{
     console.log('useeefect calling...!')
     let login=localStorage.getItem('loginValue');
     console.log('login',login);//
     if(login)
     {
      
      navigate('/Home');
     }
  });

  return (
    <div className={styles.mainWrapper2}>
      <div className={styles.mainWrapper3}>
        <form>
          <div class="form-group">
            <label for="exampleInputEmail1">Enter Username</label>
            <input type="text" class="form-control" placeholder="Enter Username" />

          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Enter Password</label>
            <input type="text" class="form-control" placeholder="Enter Password" />
          </div><br />
          <button class="btn btn-primary" onClick={()=>dashboardLogin()}>Login</button>
        </form>
      </div>
    </div>


  )
}
export default Login;
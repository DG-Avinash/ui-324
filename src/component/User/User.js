import styles from './User.module.scss';

const User=(Props)=>{

   return(
        <>
         {Props.userData?<h3><span>User Name: </span>{Props.userData}</h3>:''}
        </>
    )
    }
export default User;


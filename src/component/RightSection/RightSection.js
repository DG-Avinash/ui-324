import styles from './RightSection.module.scss';
import RightSection1 from './RightSection1';

function RightSection(Props)
{
    return(

     <div>

       <div className={styles.bodyContainRight}>
        <RightSection1 studentData={Props}/>
         {/* <p className={styles.textLable}><span>Name: </span>{Props.studentInfo.Name}{' '}</p>
          <p className={styles.textLable}><span>Email: </span>{Props.studentInfo.Email}{' '}</p>
          <p className={styles.textLable}><span>Mobile: </span>{Props.studentInfo.Mobile}{' '}</p> */}
        </div>
  
        
     </div>
    
   

    )

   
}

export default RightSection;
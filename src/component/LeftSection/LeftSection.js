import styles from './LeftSection.module.scss'
function LeftSection(Props)
{
    return(
        <>
         <div className={styles.bodyContainleft}>
           <p className={styles.textTitle}>{Props.courses[4]}</p> 
          </div>
        </>
    )
}

export default LeftSection;
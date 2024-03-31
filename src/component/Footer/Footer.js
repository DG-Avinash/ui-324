
import styles from './Footer.module.scss'

function Footer(Props)
{
    return(<>
    
    <div className={styles.headerBottom}>
        <p className='text-white'> All right and reserved By {Props.orgName} {Props.year1}</p>
     </div>

    </>)
}

export default Footer;
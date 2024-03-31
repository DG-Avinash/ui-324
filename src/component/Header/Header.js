import { Link } from "react-router-dom";
import styles from './Header.module.scss'

function Header()
{
    return(
         <>
           <div className={styles.headerTop}>
        <ul className={styles.menubar}>
            <li><Link to='/Home'>HOME</Link></li>
            <li><Link to='/About'>ABOUT</Link></li>
            <li><Link to='/Service'>SERVICE</Link></li>
            <li><Link to='/Profile'>PROFILE</Link></li>
            <li><Link to='/Gallery'>GALLERY</Link></li>
            <li><Link to='/'>PRODUCT</Link></li>
            <li><Link to='/'>BLOG</Link></li>
            <li><Link to='/'>CONTACT</Link></li>
            <li><Link to='/'>REGISTER</Link></li>
            <li><Link to='/Login'>LOGIN</Link></li>
            <li><Link to='/'>PROFILE</Link></li>
            <li><Link to='/Logout'>LOGOUT</Link></li>
            {/* <li><Link to='/student_details'></Link></li> */}
        </ul>
    </div>
         </>
    )
}
export default Header;
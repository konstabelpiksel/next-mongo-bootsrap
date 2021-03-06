//nextjs
import Image from 'next/image';

//components
import { Navbar } from "reactstrap";

//css style
import styles from '@/styles/Navbar.module.css';

export default function SystemNavbar({ dashsidebar, setDashsidebar, session }){
    return (
        <Navbar className={styles.dashnavbar}>
            <a href="#" onClick={() => setDashsidebar(!dashsidebar)}>
                <Image src="/images/hamburger.svg" width="30" height="30" alt=""/>
            </a>
            <div>
                <h4>{session? session.user.email : 'No role'}</h4>
            </div>
        </Navbar>
    )
}

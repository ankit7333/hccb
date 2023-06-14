import styles from './header.module.scss'
import Nav from '../nav'
import Image from 'next/image'
import { useState } from 'react'

export default function Header(){
    const [isActive, setActive] = useState(false);
    const menuToggle = () => {
        setActive(!isActive);
    };
    return(
        <header className={`${styles.header}`}>
            <a className={`${styles.logo}`} href="#">
                <Image src="/images/hccb-logo.png" width={100} height={100} alt="Logo" />
            </a>
            <button onClick={menuToggle} className={`imgwrap button ${styles.burdericon}`} />
            <Nav classlist={isActive ? "open" : ""} />
        </header>
    )
}
import styles from './nav.module.scss'

export default function Nav(props){
    return(
        <nav className={`${props.classlist} ${styles.nav}`}>
            <a className={`${styles.nav__list}`} href="#">ABOUT US</a>
            <a className={`${styles.nav__list}`} href="#">OPERATIONS</a>
            <a className={`${styles.nav__list}`} href="#">CAREERS</a>
            <a className={`${styles.nav__list}`} href="#">WORK WITH US</a>
            <a className={`${styles.nav__list}`} href="#">MEDIA CENTRE</a>
            <a className={`${styles.nav__list}`} href="#">SUPPORT</a>
        </nav>
    )
}
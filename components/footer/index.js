import styles from './footer.module.scss'
import Image from 'next/image'

export default function Footer(){
    return(
        <footer className={`fadein ${styles.footer}`}>
           <nav>
                <a className={`fw600 ${styles.nav__list}`} href="#">ABOUT US</a>
                <a className={`fw600 ${styles.nav__list}`} href="#">OPERATIONS</a>
                <a className={`fw600 ${styles.nav__list}`} href="#">CAREERS</a>
                <a className={`fw600 ${styles.nav__list}`} href="#">WORK WITH US</a>
                <a className={`fw600 ${styles.nav__list}`} href="#">MEDIA CENTRE</a>
                <a className={`fw600 ${styles.nav__list}`} href="#">SUPPORT</a>
            </nav>
            <ul className={`${styles.social}`}>
                <li>
                    <a href="#">
                        <Image src="/images/social/facebook.png" width={100} height={100} alt="facebook" />
                    </a>
                </li>
                <li>
                    <a href="#">
                        <Image src="/images/social/instagram.png" width={100} height={100} alt="instagram" />
                    </a>
                </li>
                <li>
                    <a href="#">
                        <Image src="/images/social/youtube.png" width={100} height={100} alt="youtube" />
                    </a>
                </li>
                <li>
                    <a href="#">
                        <Image src="/images/social/pinterest.png" width={100} height={100} alt="pinterest" />
                    </a>
                </li>
            </ul>
            <nav className={`${styles.footer__nav}`}>
                <a className={`color777`} href="#">Terms &amp; Conditions</a>
                <a className={`color777`} href="#">Privacy Policy</a>
                <a className={`color777`} href="#">Disclaimer</a>
                <a className={`color777`} href="#">Sitemap</a>
                <a className={`color777`} href="#">Blog</a>
            </nav>
            <div className={`color777 ${styles.footer__copyright}`}>© 2018-2019 Hindustan Coca-Cola Beverages Pvt. Ltd. All Rights Reserved</div>
            <div className={`color777 ${styles.footer__text}`}>Coca-Cola, Coke, Dynamic Ribbon, Contour Bottle, Sprite, Limca, Thums Up, Maaza, Fanta and Minute Maid are registered trademarks of The Coca-Cola Company.</div>
            <strong className={`color000 ${styles.footer__strong}`}>Designed and Developed by EvolutionCo</strong>
        </footer>
    )
}
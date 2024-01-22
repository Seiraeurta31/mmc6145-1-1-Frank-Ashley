import { Link } from 'react-router-dom'
import styles from '../styles/header.module.css'

export default function Header() {
    return (
        <header className={styles.headerContainer}>
            <div className={styles.logoContainer}>
                <p className={styles.logo}>Ashley Frank</p>
            </div>
            <div className={styles.linksContainer}>
            <Link className={styles.navLinks} to="/">Home</Link>
                <Link className={styles.navLinks} to="/about">About</Link>
                <Link className={styles.navLinks} to="/contact">Contact</Link>
            </div>           
        </header>
    )
}

import { Link } from 'react-router-dom'
import styles from '../styles/header.module.css'

export default function Header() {
    return (
        <header className={styles.headerContainer}>
            <div className={styles.logoContainer}>
                <Link className={styles.logo}to="/">Home</Link>
            </div>
            <div className={styles.linksContainer}>
                <Link className={styles.navLinks} to="/about">About</Link>
                <Link className={styles.navLinks} to="/contact">Contact</Link>
            </div>           
        </header>
    )
}

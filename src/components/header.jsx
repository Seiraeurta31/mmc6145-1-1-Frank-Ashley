import { Link } from 'react-router-dom'
import styles from '../styles/header.module.css'

export default function Header() {
    return (
        <header className={styles.placeholder}>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
        </header>
    )
}

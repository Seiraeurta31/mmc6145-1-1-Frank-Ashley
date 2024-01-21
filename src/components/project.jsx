import styles from '../styles/project.module.css'

export default function Project({title, description, link}) {
    return (
        <>
            <h1 className= {styles.placeholder}>{title}</h1>
            <p>{description}</p>
            <a href={link}>Link to Project</a>
        </>
    )
}

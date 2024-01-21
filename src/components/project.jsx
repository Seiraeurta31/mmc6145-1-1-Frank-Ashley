import styles from '../styles/project.module.css'

export default function Project({title, description, link}) {
    return (
        <>
            <div className={styles.projectInfo}>
                <h1 className={styles.projectName}>{title}</h1>
                <p className={styles.projectDescription}>{description}</p>
                <button className={styles.projectButton}><a href={link}>Link to Project</a></button>
                
            </div>   
        </>
    )
}

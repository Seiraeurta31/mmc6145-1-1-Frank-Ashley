import styles from '../styles/project.module.css'

export default function Project({title, description, link}) {
    return (
        <>
            <div className={styles.projectInfo}>
                <h1 className={styles.projectName}>{title}</h1>
                <p className={styles.projectDescription}>{description}</p>
                <a href={link}><button className={styles.projectButton}>Link to Project</button></a>
                
            </div>   
        </>
    )
}

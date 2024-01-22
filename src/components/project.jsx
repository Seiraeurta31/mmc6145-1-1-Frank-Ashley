import styles from '../styles/project.module.css'

export default function Project({title, description, site, codelink}) {
    return (
        <>
            <div className={styles.projectInfo}>
                <h1 className={styles.projectName}>
                    {title}
                </h1>
                <p className={styles.projectDescription}>
                    {description}
                </p>
                <div className={styles.projectButtonContainer}>
                    <a href={site}>
                        <button className={styles.projectButton}>
                            Live Site
                        </button>
                    </a>    
                    <a href={codelink}>
                        <button className={styles.projectButton}>
                            Code
                        </button>
                    </a>  
                </div>
            </div>   
        </>
    )
}

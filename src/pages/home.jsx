import styles from '../styles/home.module.css'
import Project from '../components/project'

export default function Home() {
  return (
    <>
      <main>
        
        <div className={styles.introSection}>
          <div className={styles.introInfo}>
            <h1 className={styles.introHeader}>
              Full Stack Developer
            </h1>
            <p className={styles.homeSubHeader}> 
              Passionate for creating eye-catching effective web applications
            </p>
            <a href="#projectSection">
              <button>
                My Projects
              </button>
            </a>
          </div>  
        </div>

        <div id="projectSection" className={styles.projectSection}>
          <h1 className={styles.projectHeader}>
            My Projects
          </h1>
          <div className={styles.projectCard1}>
            <Project title="Project1" description="HMTL/CSS Project" site="https://seiraeurta31.github.io/Class_Project_2023_Titanic/index.html" codelink="https://github.com/Seiraeurta31/Class_Project_2023_Titanic.git"/>
          </div>
          <div className={styles.projectCard2}>
            <Project title="Project2" description="JS/Node API Project" site="https://my-medicine-tracker-frank-674a14fc9d14.herokuapp.com/" codelink="https://github.com/Seiraeurta31/my-medicine-tracker-frank.git"/>
          </div>          
        </div>

      </main>    
    </>

  )
}
import styles from '../styles/home.module.css'
import Project from '../components/project'

export default function Home() {
  return (
    <>
      <main>
        <div className={styles.introSection}>
          <div className={styles.introInfo}>
            <h1 className={styles.introHeader}>I'm the home page!</h1>
            <p> Blah Blah Blah </p>
            <button>Learn more About me!</button>
          </div>  
        </div>
        <div className={styles.projectSection}>
          <div className={styles.projectCard1}>
            <Project title="Project1" description="HMTL/CSS Project" link="https://github.com/Seiraeurta31/Class_Project_2023_Titanic.git"/>
          </div>
          <div className={styles.projectCard2}>
            <Project title="Project2" description="JS/Node API Project" link="https://github.com/Seiraeurta31/my-medicine-tracker-frank.git"/>
          </div>          
        </div>
      </main>    
    </>

  )
}
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
              Passionate creator of eye-catching effective web applications
            </p>
            <a href="#projectSection">
              <button>
                My Work
              </button>
            </a>
          </div>  
        </div>

        <div id="projectSection" className={styles.projectSection}>
          <div>
            <h1 className={styles.projectHeader}>
              My Work
            </h1>
          </div>
          <div className={styles.projectCardContainer}>

            <div className={styles.projectCard1}>
              <Project title="History of Titanic " description="HMTL/CSS Project" site="https://seiraeurta31.github.io/Class_Project_2023_Titanic/index.html" codelink="https://github.com/Seiraeurta31/Class_Project_2023_Titanic.git"/>
            </div>
            <div className={styles.projectCard2}>
              <Project title="Medicine Tracker" description="JS/Node API Project" site="https://my-medicine-tracker-frank-674a14fc9d14.herokuapp.com/" codelink="https://github.com/Seiraeurta31/my-medicine-tracker-frank.git"/>
            </div>  
            <div className={styles.projectCard3}>
              <Project title=" Allergen Finder " description="HMTL/CSS/API Project" site="https://seiraeurta31.github.io/com6338-10-10-frank-campbell/" codelink="https://github.com/Seiraeurta31/com6338-10-10-frank-campbell.git "/>
            </div>  
            <div className={styles.projectCard4}>
              <Project title="Cocktail Recipes " description="NextJS/React/MongoDB" site="https://tipsy-spirits-frank.vercel.app/" codelink="https://github.com/Seiraeurta31/Tipsy-Spirits-Frank.git "/>
            </div>  
          </div>       
        </div>

      </main>    
    </>

  )
}
import styles from '../styles/about.module.css'
import javaScriptLogo from '../assets/javascript-js.svg'

export default function About() {
  return (
    <main className={styles.aboutSection}>
      <div className={styles.aboutInfoContainer}>
        <h1 className={styles.aboutHeader}>
          About Me
        </h1>
        <p className={styles.aboutDescription}> 
          My passion for art and creativity started at a very young age and continues with every new project. Throughout my studies and personal growth, I found I most enjoy creating art that improves the lives of others. Whether it is helping companies connect with their customers, or enhancing the experience of the user, my primary focus is to use my skills to develop projects that are not only visually appealing but enhance the user experience through optimal performance. 
        </p>
        <h2 className={styles.skillsHeader}>
          Skills
        </h2>
        <div className={styles.skillsContainer}>
          <img src = {javaScriptLogo} alt="Javascript Logo" width = "40" height="40"></img>
          <img src = "/src/assets/htmlLogo.png" alt="HTML Logo" width = "40" height="40"></img>
          <img src = "/src/assets/CSS3_logo.svg.png" alt="CSS Logo" width = "40" height="40"></img>
          <img src = "/src/assets/NodeJS Logo.jpg" alt="JNodeJS Logo" width = "40" height="40"></img>
          <img src = "/src/assets/Docker Logo.png" alt="Docker Logo" width = "40" height="40"></img>
          <img src = "/src/assets/Photoshop Logo.svg.png" alt="Photoshop Logo" width = "40" height="40"></img>
          <img src = "/src/assets/Indesign Logo.png" alt="Indesign Logo" width = "40" height="40"></img>
          <img src = "/src/assets/Illustrator Logo.png" alt="Illustrator Logo" width = "40" height="40"></img>
        </div>
      </div>
    </main>
  )
}
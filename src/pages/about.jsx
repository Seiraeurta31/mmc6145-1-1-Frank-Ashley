import styles from '../styles/about.module.css'
import javaScriptLogo from '../assets/javascript-js.svg'
import HTMLLogo from '../assets/htmlLogo.png'
import CSS3Logo from '../assets/CSS3_logo.png'
import NodeJSLogo from '../assets/NodeJSLogo.jpg'
import DockerLogo from '../assets/DockerLogo.png'
import PhotoshopLogo from '../assets/PhotoshopLogo.png'
import IndesignLogo from '../assets/IndesignLogo.png'
import IllustratorLogo from '../assets/IllustratorLogo.png'

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
          <img className={styles.skillsLogo} src = {javaScriptLogo} alt="Javascript Logo" width = "40" height="40"></img>
          <img className={styles.skillsLogo} src = {HTMLLogo} alt="HTML Logo" width = "40" height="40"></img>
          <img className={styles.skillsLogo} src = {CSS3Logo} alt="CSS Logo" width = "40" height="40"></img>
          <img className={styles.skillsLogo} src = {NodeJSLogo} alt="JNodeJS Logo" width = "40" height="40"></img>
          <img className={styles.skillsLogo} src = {DockerLogo} alt="Docker Logo" width = "40" height="40"></img>
          <img className={styles.skillsLogo} src = {PhotoshopLogo} alt="Photoshop Logo" width = "40" height="40"></img>
          <img className={styles.skillsLogo} src = {IndesignLogo} alt="Indesign Logo" width = "40" height="40"></img>
          <img className={styles.skillsLogo} src = {IllustratorLogo} alt="Illustrator Logo" width = "40" height="40"></img>
        </div>
      </div>
    </main>
  )
}
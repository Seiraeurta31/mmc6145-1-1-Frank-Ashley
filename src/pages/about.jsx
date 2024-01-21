import styles from '../styles/about.module.css'

export default function About() {
  return (
    <main className={styles.aboutSection}>
      <div className={styles.aboutInfoContainer}>
        <h1 className={styles.aboutHeader}>About Me</h1>
        <p className={styles.aboutDescription}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut id inventore mollitia illum, earum laborum enim vero deleniti quod nisi excepturi quos esse incidunt provident laudantium soluta. Quaerat, magnam inventore!</p>
        <h2 className={styles.skillsHeader}>Skills</h2>
        <div className={styles.skillsContainer}>
          <img src = "src\assets\javascript-js.svg" alt="Javascript Logo" width = "40" height="40"></img>
          <img src = "src\assets\htmlLogo.png" alt="HTML Logo" width = "40" height="40"></img>
          <img src = "src\assets\CSS3_logo.svg.png" alt="CSS Logo" width = "40" height="40"></img>
          <img src = "src\assets\NodeJS Logo.jpg" alt="JNodeJS Logo" width = "40" height="40"></img>
          <img src = "src\assets\Docker Logo.png" alt="Docker Logo" width = "40" height="40"></img>
          <img src = "src\assets\Photoshop Logo.svg.png" alt="Photoshop Logo" width = "40" height="40"></img>
          <img src = "src\assets\Indesign Logo.png" alt="Indesign Logo" width = "40" height="40"></img>
          <img src = "src\assets\Illustrator Logo.png" alt="Illustrator Logo" width = "40" height="40"></img>
        </div>
      </div>
    </main>
  )
}
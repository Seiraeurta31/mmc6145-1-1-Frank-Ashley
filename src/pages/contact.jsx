import styles from '../styles/contact.module.css'
import LinkedinLogo from '../assets/linkedin.png'
import GitHubLogo from '../assets/github.png'

export default function Contact() {
  return (

    <main className={styles.contactSection}>

          <div className={styles.contactContainer}>

            <div className={styles.contactInfoContainer}>
              <h1 className={styles.contactHeader}>
                Contact Information 
              </h1>
              <p className={styles.contactDescription}> 
                Email: ashley.frank@ufl.edu
              </p>
              <p className={styles.contactDescription}> 
                Phone: 904-999-9999
              </p>
            </div>

          
            
            <div className={styles.connectContainer}>
              <h2 className={styles.connectHeader}>
                Ways to get connected!
              </h2>
              <div>
                <div className={styles.socialLink}>
                  <img src = {LinkedinLogo} alt="JLinkedin Logo" width = "40" height="40"></img>
                  <a className={styles.connectLinks} href="https://www.linkedin.com/in/ashleyfrank2018">LinkedIn</a>
                </div>
                <div className={styles.socialLink}>
                  <img src = {GitHubLogo} alt="Github Logo" width = "40" height="40"></img>
                  <a className={styles.connectLinks} href="https://github.com/Seiraeurta31"> GitHub </a> 
                </div> 
              </div>
            </div>
            
          </div>
        </main>

  )
}
import styles from '../styles/home.module.css'
import Project from '../components/project'

export default function Home() {
  return (
    <>
      <main>
        <h1 className={styles.placeholder}>I'm the home page!</h1>
      </main>
      <Project title="Project1" description="HMTL/CSS Project" link="https://github.com/Seiraeurta31/Class_Project_2023_Titanic.git"/>
      <Project title="Project2" description="JS/Node API Project" link="https://github.com/Seiraeurta31/my-medicine-tracker-frank.git"/>
    </>

  )
}
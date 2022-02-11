
//COMPONENTS
import Circle from '../utils/circle/circle';

//CSS
import styles from '../styles/Home.module.scss'

//REACT-ICONS
import { FaReact } from 'react-icons/fa';
import { SiNextdotjs, SiMaterialui } from 'react-icons/si';

export default function Home() {
  return (
    <div className={styles.container}>
      <article className={styles.banner}>
        <h1>Sou um Dev. Front-End especializado em:</h1>
        <div className={styles.stacksBox}>
          <h2 style={{color: '#00D8FF'}}><FaReact /></h2>
          <h2 style={{color: '#fff'}}><SiNextdotjs /></h2>
          <h2 style={{color: '#0081CB'}}><SiMaterialui /></h2>
        </div>
      </article>

      <article>
        <Circle />
      </article>
    </div>
  )
}

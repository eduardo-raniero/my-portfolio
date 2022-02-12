
//COMPONENTS
import Circle from '../utils/circle/circle';

//CSS
import styles from '../styles/Home.module.scss'

//REACT-ICONS
import { FaReact } from 'react-icons/fa';
import { SiNextdotjs, SiMaterialui } from 'react-icons/si';
import { GrDocumentPdf } from 'react-icons/gr';

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
        <br />
        <div className={styles.presentation}>
          <div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta nam, dolores quisquam porro pariatur distinctio aut nobis totam illum eius maxime itaque numquam, perferendis fuga est quae mollitia, architecto consequatur?</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta nam, dolores quisquam porro pariatur distinctio aut nobis totam illum eius maxime itaque numquam, perferendis fuga est quae mollitia, architecto consequatur?</p>

          </div>
          <div className={styles.cv}>
            <GrDocumentPdf />
            <br />
            <button>Baixar CV</button>
            
            <div></div>
          </div>
        </div>
      </article>

      <article className={styles.projects}>
        <h2>Principais Projetos</h2>

        <div className={styles.projectsItem}></div>
        <div className={styles.projectsItem}></div>
        <div className={styles.projectsItem}></div>
      </article>
    </div>
  )
}

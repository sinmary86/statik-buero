import styles from "./Projects.module.scss";

export const ProjectGalery = () => {
  return (
    <section id="projects" className={styles.gridLayout}>
      
        <div className={styles.headerBlock}>
        <h2>Projekte</h2>
        </div>

        <div className={styles.textBlock}>
          <p>
           Wir sind bei aller Statik ständig in Bewegung. In allen Disziplinen der Baustatik und Baukonstruktion legen wir Wert auf erstklassige Qualität und intelligente Lösungen. Damit realisiert unser Team für unsere Kunden spannende Projekte, große Aufgaben, nachhaltige Ergebnisse und sichtbare Erfolge.
          </p>
        </div>

         
        <div className={styles.btnBlock}>
        <button className="btn-dark">Alle Fotos ansehen</button>
        </div>

        <div className={styles.imgUnderText}>
             <img src="/src/assets/foto-of-our-work-four.png" alt="Projekt foto" />
        </div>


        <div className={styles.imgSmallMiddle}>
             <img src="/src/assets/foto-of-our-work-three.png" alt="Projekt foto" />
        </div>


        <div className={styles.imgBigMiddle}>
            <img src="/src/assets/foto-of-our-work-two.png" alt="Projekt foto" />
        </div>

        <div className={styles.imgTallRight}>
            <img src="/src/assets/foto-of-our-work-one.png" alt="Projekt foto" />
        </div>

    </section>
  );
};

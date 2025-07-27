import { useState } from "react";
import styles from "./Projects.module.scss";
import { projectsData } from "./projectsData";

export const ProjectGalery = () => {

    const [showAll, setShowAll] = useState(false);

    const visibleImages = projectsData.filter((img) => img.initialVisible);
    const hiddenImages = projectsData.filter((img) => !img.initialVisible);

  return (
 
    <section id="projects" className={styles.wrapper}>

        <div className={styles.gridLayout}> 
      
        <div className={styles.headerBlock}>
        <h2>Projekte</h2>
        </div>

        <div className={styles.textBlock}>
          <p>
           Wir sind bei aller Statik ständig in Bewegung. In allen Disziplinen der Baustatik und Baukonstruktion legen wir Wert auf erstklassige Qualität und intelligente Lösungen. Damit realisiert unser Team für unsere Kunden spannende Projekte, große Aufgaben, nachhaltige Ergebnisse und sichtbare Erfolge.
          </p>
        </div>

         
      <div className={styles.btnBlock}>
        <button className="btn-dark" onClick={() => setShowAll((prev) => !prev)}>
          {showAll ? "WENIGER ANZEIGEN" : "MEHR ANZEIGEN"}
        </button>
      </div>

      {/* Основные изображения с позиционированием */}
        {visibleImages.map((img) => (
          <div key={img.className} className={styles[img.className]}>
            <img src={img.src} alt={img.alt} />
          </div>
        ))}
      </div>

      {/* Дополнительные изображения в гриде */}
      {showAll && (
        <div className={styles.extraImagesWrapper}>
          {hiddenImages.map((img, i) => (
            <div key={i} className={styles.imgContainer}>
              <img src={img.src} alt={img.alt} />
            </div>
          ))}
        </div>
      )}

 </section>
  );
};

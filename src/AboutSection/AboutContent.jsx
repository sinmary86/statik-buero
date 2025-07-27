import styles from './AboutSection.module.scss';


export const AboutContent  = () => {
    return(
       <div className={styles.aboutWrapper}>
      
      <div className={styles.header}>
        <h2>
          Büro{' '}
          <span className="d-none d-md-inline"><br /></span>
          Profil
        </h2>
      </div>

     <div className={styles.textBlocks}> 
              <p>Wir sind Ihr kompetenter Partner für alle Fragen der Statik und Tragwerksplanung. Mit unserer langjährigen Erfahrung und technischem Know-how entwickeln wir tragfähige Lösungen für Bauprojekte jeder Art – vom Wohnhaus bis hin zu komplexen Gewerbebauten. Dabei legen wir größten Wert auf Präzision, Wirtschaftlichkeit und Sicherheit. Unser Ziel ist es, Bauvorhaben von Anfang an optimal zu begleiten, um Risiken zu minimieren und die Qualität nachhaltig zu sichern.</p>
          
              <p>Wir begleiten unsere Kunden in allen Phasen des Bauvorhabens – von der ersten Idee bis zur erfolgreichen Umsetzung. Dabei setzen wir auf modernste Berechnungsmethoden und eine enge Zusammenarbeit mit Architekten, Bauunternehmen und privaten Bauherren. Durch unsere praxisorientierte Herangehensweise entstehen Lösungen, die nicht nur technisch überzeugen, sondern auch wirtschaftlich sinnvoll sind. Vertrauen, Zuverlässigkeit und höchste Qualität bilden dabei die Basis unserer Arbeit.</p>
           </div>   
       </div>
)
}
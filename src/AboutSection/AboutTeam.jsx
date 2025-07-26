import styles from './AboutSection.module.scss';
import team1 from '../assets/team-man.jpg';
import team2 from '../assets/team-woman.jpg';
import team3 from '../assets/team-boss.jpg';

export const AboutTeam = () => {
  return (
    <section className={styles.textBlocks}>
      <div className={styles.header}>
        <h2>
          Unser
          <span className="d-none d-md-inline"><br /></span>
          Team
        </h2>
      </div> 

       <div className={styles.teamGrid}>
         <div className={styles.member}>
          <img src={team3} alt="Stefan Müller" />
          <h3>Stefan Müller</h3>
          <p>Geschäftsführer des Büros mit über 15 Jahren Erfahrung</p>
        </div>

        <div className={styles.member}>
          <img src={team2} alt="Laura Schneider" />
          <h3>Laura Schneider</h3>
          <p>Fachplanerin für Statik im Hoch- und Industriebau</p>
        </div>

     
        <div className={styles.member}>
          <img src={team1} alt="Max Meyer" />
          <h3>Max Meyer</h3>
          <p>Experte für Tragwerksplanung und Bauphysik</p>
        </div>

      
      </div>
    </section>
  );
};
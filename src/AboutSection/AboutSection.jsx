import { AboutContent } from './AboutContent';
import styles from './AboutSection.module.scss';
import { AboutTeam } from './AboutTeam';

export const AboutSection  = () => {
    return(
        <section id="about" className={styles.sectionAbout}> 

            <AboutContent />
            <AboutTeam />

        </section>
       
)
}
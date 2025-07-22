import { AboutContent } from './AboutContent';
import styles from './AboutSection.module.scss';

export const AboutSection  = () => {
    return(
        <section id="about" className={styles.section}> 

            <AboutContent />

        </section>
       
)
}
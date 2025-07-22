import styles from './MainSection.module.scss';

export const MainSection = () => {
    return(
        <section id="main" className={styles.mainSection}>
            <div className={styles.mainContent}>
                <h1>STATIK, DIE HÄLT, 
                    WAS SIE VERSPRICHT.</h1>
                <p>Es geht um das harmonische Zusammenspiel einer kühnen Idee
                    und eines klar berechneten Konstrukts.</p>
            </div>
        </section>
  );
};
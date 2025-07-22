import styles from './ContactSection.module.scss';

export const ContactSection = () => {
  return (
    <section id="contacts" className={styles.sectionDark}>
      <div className={styles.contactInfo}>
        <h2>KONTAKT</h2>

        <div className={styles.contactBlock}>
          <h3>BESUCHEN SIE UNS</h3>
          <p>73550 Waldstetten</p>
        </div>

        <div className={styles.contactBlock}>
          <h3>RUFEN SIE AN</h3>
          <p>Tel. / Fax. 7162 262626</p>
        </div>

        <div className={styles.contactBlock}>
          <h3>SCHREIBEN SIE UNS</h3>
          <p>e-mail: schwarzkopf@skf-ing.de</p>
        </div>
      </div>

      <div className={styles.mapWrapper}>
        <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2707.7776729928436!2d9.834141076665763!3d48.77656597132517!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4799e86dfb0e2ae1%3A0x6dbb6b271f1bcd0d!2sFrauenholzweg%206%2C%2073550%20Waldstetten!5e0!3m2!1sde!2sde!4v1721478120000!5m2!1sde!2sde"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </section>
  );
};

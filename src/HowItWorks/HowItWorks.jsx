import { Row, Col } from "react-bootstrap";
import styles from './HowItWorks.module.scss';
import { howItWorksData } from "./HowItWorksData";


export const HowItWorks = () => (
  <section className={styles.sectionFoto}>
    <h2>Wie das funktioniert?</h2>

    <Row className={styles.howItWorksContent}>
      {howItWorksData.map(({ number, title, description }, index) => (
        <Col
          key={index}
          md={6}
          lg={4}
          className="d-flex flex-column align-items-center text-center gap-3"
        >
          <span>{number}</span> 
          <h3>{title}</h3>
          <p>{description}</p>
        </Col>
      ))}
    </Row>

    <div className={`${styles.btn} text-center`}>
      <a href="#" className={`${styles.btn} btn-light`}>Kontakt mit uns</a>
    </div>
  </section>
);

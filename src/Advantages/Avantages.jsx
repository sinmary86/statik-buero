import { Row, Col } from "react-bootstrap";
import { avantagesData } from "./AvantagesData";
import styles from './Avantages.module.scss';


export const Avantages = () => (
  <section className={styles.sectionDark}>
    <h2>Darauf können Sie bauen</h2>

    <Row className={styles.advantagesContent}>
      {avantagesData.map(({ icon, title, description }, index) => (
        <Col
          key={index}
          md={6}
          lg={4}
          className="d-flex flex-column align-items-center text-center gap-3"
        >
          <img src={icon} alt={title} />
          <h3>{title}</h3>
          <p>{description}</p>
        </Col>
      ))}
    </Row>

    <div className="text-center">
        <a href="#" className="btn-light">Kontakt mit uns</a>
    </div>
  </section>
);

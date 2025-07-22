import { Row, Col } from "react-bootstrap";
import styles from './Projects.module.scss';


export const Experience = () => (
    <Row className={styles.experienceContent}>
     
        <Col md={6} lg={4} className="d-flex flex-column align-items-center text-center gap-3">
          <h2>
            24 <br/>
            JAHRE
          </h2>
        </Col>

        <Col md={6} lg={4} className="d-flex flex-column align-items-center text-center gap-3">
          <h2>
            1562 <br/>
            PROJEKTE
          </h2>
        </Col>

        <Col md={6} lg={4} className="d-flex flex-column align-items-center text-center gap-3">
          <h2>
            1047 <br/>
            KUNDEN
          </h2>
        </Col>

    </Row>
);

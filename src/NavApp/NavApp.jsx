import { Nav, Navbar } from "react-bootstrap";
import logo from '../assets/logo-statik-buero.png';
import burger from '../assets/icon-burger-nav.png';
import styles from './NavApp.module.scss';

export const NavApp = () => {
    return(
        <Navbar sticky="top" collapseOnSelect expand="lg" className={styles.navContainer}>
            <Navbar.Brand href="#home">
                <img src={logo} alt="logo von statik Büro"  height="60" className="d-inline-block align-top" />
            </Navbar.Brand>
            
            <Navbar.Toggle aria-controls="responsive-navbar-nav">
                <img src={burger} alt="burger navbar" />
            </Navbar.Toggle>
            <Navbar.Collapse id="responsive-navbar-nav" className={styles.offcanvas}>
                <Nav className={`me-auto mx-auto ${styles.navLinks}`}>
                    <Nav.Link href="#main">STARTSEITE</Nav.Link>
                    <Nav.Link href="#about">ÜBER UNS</Nav.Link>
                    <Nav.Link href="#projects">PROJEKTE</Nav.Link>
                    <Nav.Link href="#contacts">KONTAKTEN</Nav.Link>
                </Nav>
                <Nav>
                    <Nav.Link href="#" className={`${styles.btn} btn-dark`}>STATIK ANFRAGEN</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}
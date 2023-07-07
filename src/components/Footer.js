import { Col, Container, Row } from "react-bootstrap";
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';
export const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <div class="pool">
                <Row className="align-item-center">
                    
                    <Col md={6}>
                    <div className="logo">Buta Camelia</div>
                    </Col>
                    <Col md={6} className="text-center">
                        <div className="social-icon">
                            <a href='https://www.linkedin.com/in/buta-camelia-46a61a206/'><img src={navIcon1} alt="" /> </a>
                            <a href='https://www.facebook.com/camellya.buta/'><img src={navIcon2} alt="" /> </a>
                            <a href='https://www.instagram.com/buta.camelia/'><img src={navIcon3} alt="" /> </a>
                        </div>
                    </Col>
                </Row>
                <Row className="align-item-center">
                <p>CopyRight 2023. Al Right Reserved </p>
                </Row>
                </div>
            </Container>
        </footer>
    )
}
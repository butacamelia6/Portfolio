import { Col, Container, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css';
import m90 from "../assets/img/m90.svg";
// import m95 from "../assets/img/m95.svg";
import m80 from "../assets/img/m80.svg";
import m70 from "../assets/img/m70.svg";
import m40 from "../assets/img/m40.svg";

export const Skills = () => {
    const responsive = {
        superLargeDesktop: {
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

      return (
        <section className="skill" id='skills'>
            <Container>
                <Row>
                    <Col>
                    <div className="skill-box">
                        <h2>
                            Skills
                        </h2>
                        <p>I'm still improving my skills below. <br/> now I'm studying Angular courses from Angular University.</p>
                        <Carousel responsive={responsive} infinite={true} className="skill-slider">
                            <div className="item">
                                <img src={m80} alt="Image"/>
                                <h5> CSS</h5>
                            </div>
                            <div className="item">
                                <img src={m90} alt="Image"/>
                                <h5> HTML</h5>
                            </div>
                            <div className="item">
                                <img src={m40} alt="Image"/>
                                <h5> React</h5>
                            </div>
                            <div className="item">
                                <img src={m40} alt="Image"/>
                                <h5> Angular</h5>
                            </div>
                            <div className="item">
                                <img src={m70} alt="Image"/>
                                <h5> JavaScript</h5>
                            </div>
                            <div className="item">
                                <img src={m70} alt="Image"/>
                                <h5> SQL</h5>
                            </div>
                            <div className="item">
                                <img src={m70} alt="Image"/>
                                <h5> PHP</h5>
                            </div>
                        </Carousel>
                    </div>
                    </Col>
                </Row>
            </Container>
         
        </section>
      )
}
import {Col, Row, Container, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import reborn from "../assets/images/reborn.png";
import runtoyou from "../assets/images/runtoyou.png"
import side from "../assets/images/side-green.png";
import project from "../assets/images/future-project.png";


export const Projects = () => {
    const projects  = [
        {
            title: "REBORN",
            description: "presentation site for a business that rents dresses",
            imgUrl : reborn,
            link: "https://github.com/butacamelia6/reborn.git", 

        },
        {
            title: "RUNTOYOU",
            description: "delivery app",
            imgUrl : runtoyou,
            link: "https://github.com/butacamelia6/runtoyou",

        },
        {
            title: "FUTERE PROJECT",
            description: "will see",
            imgUrl : project,
            link: "https://github.com/butacamelia6?tab=repositories",
        },
        {
            title: "FUTERE PROJECT",
            description: "will see",
            imgUrl : project,
            link: "https://github.com/butacamelia6?tab=repositories",
        },
        {
            title: "FUTERE PROJECT",
            description: "will see",
            imgUrl : project,
            link: "https://github.com/butacamelia6?tab=repositories",
        },
        {
            title: "FUTERE PROJECT",
            description: "will see",
            imgUrl : project,
            link: "https://github.com/butacamelia6?tab=repositories",
        },
             
    ];
    return (
        <section className="project" id="projects">
            <Container>
                <Row>
                    <Col>
                    <h2>Projects</h2>
                    <p>I just started creating sites, currently there is only one, but more will follow soon</p>
                    <Tab.Container id="projects-tabs" defaultActiveKey="first">
                        <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                            <Nav.Item>
                                <Nav.Link eventKey="first">Tab 1</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="second">Tab 2</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="third">Tab 3</Nav.Link>
                            </Nav.Item>
                        </Nav>
                        <Tab.Content>
                            <Tab.Pane eventKey="first">
                                <Row>
                                    {
                                    projects.map((project, index) => {
                                        return (
                                        <ProjectCard
                                            key={index}
                                            {...project}
                                            />
                                        )
                                    })
                                    }
                                </Row>
                            </Tab.Pane>
                            <Tab.Pane className="tab" eventKey="second">in the futer</Tab.Pane>
                            <Tab.Pane className="tab" eventKey="third">in the futer</Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                    </Col>
                </Row>

            </Container>
            <img className="background-image-right" src={side} alt="imag-right"></img>
        </section> 
    )
}
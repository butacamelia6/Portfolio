import {Col, Row, Container, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import pensiune from "../assets/images/pensiune.png";
import dresses from "../assets/images/dresses.png";

export const Projects = () => {
    const projects  = [
        {
            title: "Agropensiunea Danila",
            description: "Design and Development",
            imgUrl : pensiune,

        },
        {
            title: "RentDresses",
            description: "dresses",
            imgUrl : dresses,

        },
    ];
    return (
        <sectiom className="project" id="project">
            <Container>
                <Row>
                    <Col>
                    <h2>Projects</h2>
                    <p>Lllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllll</p>
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
                                    projects.map((project, index) =>{
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
                        <Tab.Pane eventKey="second">Cevaaaaa</Tab.Pane>
                        <Tab.Pane eventKey="third">Cevaaaaa</Tab.Pane>
                  </Tab.Content>
                  </Tab.Container>
                    </Col>
                </Row>

            </Container>
        </sectiom> 
    )
}
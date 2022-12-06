import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.jpg";
import projImg2 from "../assets/img/project-img2.jpg";
import projImg3 from "../assets/img/project-img3.jpg";
import projImg4 from "../assets/img/project-img4.jpg";
import projImg5 from "../assets/img/project-img5.jpg";
import projImg6 from "../assets/img/project-img6.png";
import projImg7 from "../assets/img/project-img7.png";
import projImg8 from "../assets/img/project-img8.png";
import projImg9 from "../assets/img/project-img9.png";
import projImg10 from "../assets/img/project-img10.jpg";
import projImg11 from "../assets/img/project-img11.png";

import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const projectsTab1 = [
    {
      title: "React Website with Styled Components",
      description: "Design & Development",
      imgUrl: projImg8,
      repository: "GitHub",
      repositorylink:
        "https://github.com/ChristopherCruz21/React-Styled-Components",
      livedemolink: "https://christopherdolla.netlify.app",
    },
    {
      title: "Pure HTML & CSS Fully Responsive Portfolio",
      description: "Design & Development",
      imgUrl: projImg9,
      repository: "GitHub",
      repositorylink: "https://github.com/ChristopherCruz21/personalWebsite",
      livedemolink: "https://christophercruz21.github.io/personalWebsite/",
    },
    {
      title: "R Case Study",
      description: "Divvy Bike-share Data Analysis",
      imgUrl: projImg7,
      repository: "Kaggle",
      repositorylink:
        "https://www.kaggle.com/code/christophercc/case-study-divvy-bike-share-data/notebook",
      livedemolink:
        "https://www.kaggle.com/code/christophercc/case-study-divvy-bike-share-data?scriptVersionId=84438741&cellId=16",
    },
    {
      title: "Divvy Bikes 2021 Q1",
      description: "Divvy Bike-share Data Visualization in Tableau",
      imgUrl: projImg6,
      repository: "GitHub",
      repositorylink:
        "https://public.tableau.com/app/profile/christopher.cruz.collazo/viz/DivvyBikes2021Q1/Dashboard1",
      livedemolink:
        "https://public.tableau.com/app/profile/christopher.cruz.collazo/viz/DivvyBikes2021Q1/Dashboard1",
    },
    {
      title: "(On Development)React Portfolio Website",
      description: "Design & Development",
      imgUrl: projImg11,
      repository: "GitHub",
      repositorylink: "https://github.com/ChristopherCruz21/React-portfolio",
      livedemolink: "https://ccruzreact.netlify.app/",
    },
    {
      title: "(UPCOMING)MERN Full Stack Web App",
      description: "E-devices Repair store web app",
      imgUrl: projImg10,
      repository: "N/A",
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>My Recent Work</h2>
                  <p></p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
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
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projectsTab1.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <p>Future Projects</p>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <p>Future Projects</p>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
};

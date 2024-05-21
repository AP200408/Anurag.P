import React from "react";
import { Carousel, Container, Row, Col, Button } from "react-bootstrap";
import all_projects from "./all_projects";
import { FaGithub } from "react-icons/fa";
import styles from "./Projects.module.css";

function Projects() {
  const projectsArray = Object.entries(all_projects);

  return (
    <section id="projects" className={styles.sectionStyle}>
      <Container fluid>
        <h2 className={styles.titleStyle}>My Projects</h2>
        <Carousel
          interval={3000}
          indicators={true}
          nextIcon={
            <span
              aria-hidden="true"
              className={`carousel-control-next-icon ${styles.controlIcon}`}
            />
          }
          prevIcon={
            <span
              aria-hidden="true"
              className={`carousel-control-prev-icon ${styles.controlIcon}`}
            />
          }
        >
          {projectsArray.map(([name, description], index) => (
            <Carousel.Item key={index} className={styles.carouselItemStyle}>
              <Row className="justify-content-center">
                <Col xs={10} md={8} lg={6}>
                  <div className={styles.projectCardStyle}>
                    <h3>{name}</h3>
                    <p>{description[0]}</p>
                    <Button
                      variant="dark"
                      href={description[1]}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaGithub /> View on GitHub
                    </Button>
                  </div>
                </Col>
              </Row>
            </Carousel.Item>
          ))}
        </Carousel>
      </Container>
    </section>
  );
}

export default Projects;

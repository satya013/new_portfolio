import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";

import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Group chatting app"
              description="In this project , I have used Java swing for creating user interface, awt and Socket programming for connection between server and client."
              ghLink="https://github.com/satya013/java-groupchattingapp"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Bus booking system"
              description="In this project , I have built a basic bus booking system using Java swing and MySql . I have used tools like netbeans , XAMPP and phpMyadmin ."
              ghLink="https://github.com/satya013/java-bus_booking_system"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Spotify clone"
              description="This is a basic Spotify clone website . Here , I have built a music player using HTML , CSS AND JavaScript , in which one can play , pause , seek and play next music ."
              ghLink="https://github.com/satya013/Spotify-clone"
                          
            />
          </Col>

         
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

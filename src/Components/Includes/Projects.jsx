import React from "react";
import {
  Button,
  Card,
  Col,
  Container,
  Row,
  
} from "react-bootstrap";
import { Link } from 'react-router-dom';
import image1 from "../Images/slider/quiet.png";
import image2 from "../Images/slider/pursuit.png"
import image3 from "../Images/slider/windmill.png"
import image4 from "../Images/slider/rain.png"
import image5 from "../Images/slider/fly.png"
import image6 from "../Images/slider/fairaway.png"
import image7 from "../Images/slider/image-1.png"
import image8 from "../Images/slider/workcations.png"


const Projects = () => {
  const projects = [{ 
    id: 1, 
    title: "Total Environment In That Quiet Earth",
    description: "2, 3 & 4BHK Apartments & Villas",
    imageurl: image1,
    link: "/projects/quiet-earth"

},
{ id: 2, 
    title: "Total Environment Pursuit of a Radical Rhapsody",
    description: "Luxury Apartments & Villas in Whitefield, East Bangalore",
    imageurl: image2,
    link: "/projects/pursuit"
},
{ id: 3, 
    title: "Total Environment Windmill Of Your Mind",
    description: "Luxury Apartments & Villas in Whitefield, East Bangalore",
    imageurl: image3,
    link: "/projects/windmill",
},
{ id: 4, 
    title: "Total Environment After The Rain",
    description: "Luxury Villas in Yelahanka, North Bangalore",
    imageurl: image4,
    link: "/projects/rain"
},
{ id: 5, 
    title: "Total Environment Learning To Fly",
    description: "Luxury Apartments in JP Nagar, South Bangalore",
    imageurl: image5,
    link: "/projects/learning-fly"
},
{ id: 6, 
    title: "Total Environment The Magic Faraway Tree",
    description: "Luxury Apartments in Kanakapura Road, South Bangalore",
    imageurl: image6,
    link: "/projects/magic-tree"
},
{ id: 7, 
    title: "Total Environment Workcations - Yelhanka",
    description: "Pre Launch Commercial Development in Yelhanka, Bangalore",
    imageurl: image7,
    link: "/projects/workcations-yelhanka"
},

{ id: 8, 
  title: "Total Environment Workcations - WhiteField",
  description: "Pre Launch Commercial Development in Whitefield, Bangalore",
  imageurl: image8,
  link: "/projects/workations"
},


];
  return (
    <div className="bg-light py-3 py-md-5" id="projects">
      <Container fluid className="ps-0 pe-0">
        <Row className="justify-content-center g-3">
            <h2 className="py-3 text-center fs-3">Total EnvironmentProjects</h2> 
          {projects.map((project) => (
            <Col md={6} key={project.id}>
              <Card>
                <Card.Img variant="top" src={project.imageurl} className="position-relative" />
                  {/* <h6 className="position-absolute end-0 bg-danger m-3 rounded-pill text-white p-2 pill-custom">{project.status}</h6> */}
                <Card.Body className="text-center">
                  <h2 className="fs-4">{project.title}</h2>
                  <h3 className="fs-5">{project.description}</h3>
                  <div className="text-center">
                  <Button
                    variant="dark"
                    as={Link}
                    to={project.link}
                    className=""
                  >
                    Read More
                  </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Projects;

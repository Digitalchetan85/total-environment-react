import React from "react";
import { Card, Col, Container, Row, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import image1 from "../Images/slider/pursuit.png";
import image2 from "../Images/slider/windmill.png";
import image3 from "../Images/slider/rain.png";
import image4 from "../Images/slider/fly.png";
import image5 from "../Images/slider/fairaway.png";
import image6 from "../Images/slider/image-1.jpg";
import image7 from "../Images/slider/workcations.jpg";

const OtherProjectsQuietEarth = () => {
  const projects = [
    {
      id: 1,
      title: " T E Pursuit Of A Radical Rhapsody",
      description: "Luxury Apartments & Villas ",
      location: "Whitefield, East Bangalore",
      imageurl: image1,
      link: "/projects/pursuit",
    },
    {
      id: 2,
      title: " T E Windmill Of Your Mind",
      description: "Luxury Apartments & Villas",
      location: "Whitefield, East Bangalore",
      imageurl: image2,
      link: "/projects/windmill",
    },
    {
      id: 3,
      title: " T E After The Rain",
      description: "Luxury Villas",
      location: "Yelahanka, North Bangalore",
      imageurl: image3,
      link: "/projects/rain",
    },
    {
      id: 4,
      title: " T E Learning To Fly",
      description: "Luxury Apartments",
      location: "JP Nagar, South Bangalore",
      imageurl: image4,
      link: "/projects/learning-fly",
    },
    // { id: 5,
    //     title: " Total Environment The Magic Faraway Tree",
    //     description: "Luxury Apartments in Kanakapura Road, South Bangalore",
    //     imageurl: image5,
    //     link: "/projects/magic-tree",
    // },
    {
      id: 6,
      title: " T E Workcations",
      description: "Commercial Development",
      location: "Yelhanka, East Bangalore",
      imageurl: image6,
      link: "/projects/workcations-yelhanka",
    },

    {
      id: 7,
      title: " T E Workcations",
      description: "Commercial Development",
      location: "Whitefield, East Bangalore",
      imageurl: image7,
      link: "/projects/workations",
    },
  ];

  return (
    <div className="bg-light py-3 py-md-5" id="projects">
      <Container>
        <Row className="justify-content-center g-3">
          <h2 className="py-3 text-center">Total Environment Projects</h2>
          {projects.map((project) => (
            <Col md={4} key={project.id}>
              <Card style={{ height: "350px" }}>
                <Card.Img
                  variant="top"
                  src={project.imageurl}
                  className="position-relative"
                />
                {/* <h6 className="position-absolute end-0 bg-danger m-3 rounded-pill text-white p-2 pill-custom">{project.status}</h6> */}
                <Card.Body className="text-center">
                  <h3 className="fs-5">{project.title}</h3>
                  <h4 className="fs-6">{project.location}</h4>
                </Card.Body>
                <Card.Footer className="align-center py-auto">
                  <div className="text-center py-2">
                    <p class="float-start mb-0">{project.description}</p>
                    <Button
                      variant="dark"
                      as={Link}
                      to={project.link}
                      className="float-end"
                    >
                      Read More
                    </Button>
                  </div>
                </Card.Footer>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default OtherProjectsQuietEarth;

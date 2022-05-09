import React from 'react'
import { Card, Col, Container, Row, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import image1 from '../Images/slider/quiet.png';
import image2 from '../Images/slider/windmill.png';
import image3 from '../Images/slider/pursuit.png';
import image4 from '../Images/slider/fly.png';
import image5 from '../Images/slider/fairaway.png';
import image6 from '../Images/slider/workcations.png'

const OtherProjectsRain = () => {

    const projects = [{ 
        id: 1, 
        title: " Total Environment In That Quiet Earth",
        description: "Luxury Apartments & Villas Off Hennur Road, North Bangalore",
        imageurl: image1,
        link: "/projects/quiet-earth",
    
    },
    { id: 2, 
        title: " Total Environment Windmill Of Your Mind",
        description: "Luxury Apartments & Villas in Whitefield, East Bangalore",
        imageurl: image2,
        link: "/projects/windmill",
    },
    { id: 3, 
        title: " Total Environment Pursuit Of A Radical Rhapsody",
        description: "Luxury Apartments & Villas in Whitefield, East Bangalore",
        imageurl: image3,
        link: "/projects/pursuit",
    },
    { id: 4, 
        title: " Total Environment Learning To Fly",
        description: "Luxury Apartments in JP Nagar, South Bangalore",
        imageurl: image4,
        link: "/projects/learning-fly",
    },
    { id: 5, 
        title: " Total Environment The Magic Faraway Tree",
        description: "Luxury Apartments in Kanakapura Road, South Bangalore",
        imageurl: image5,
        link: "/projects/magic-tree",
    },
    { id: 6, 
        title: " Total Environment Workcations - Pursuit Of A Radical Rhapsody Commercial",
        description: "Pre Launch Commercial Development in Whitefield, East Bangalore",
        imageurl: image6,
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
              <Card>
                <Card.Img variant="top" src={project.imageurl} className="position-relative" />
                  {/* <h6 className="position-absolute end-0 bg-danger m-3 rounded-pill text-white p-2 pill-custom">{project.status}</h6> */}
                <Card.Body className="text-center">
                  <h3 className="fs-5">{project.title}</h3>
                  <h4 className="fs-6">{project.description}</h4>
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
  )
}

export default OtherProjectsRain
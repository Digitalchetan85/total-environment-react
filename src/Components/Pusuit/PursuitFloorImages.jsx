import React from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap';
import SimpleReactLightbox, { SRLWrapper } from 'simple-react-lightbox';
import Image1 from "../Images/projects/pursuit/floor-plans/c20v1a.png";
import Image2 from "../Images/projects/pursuit/floor-plans/c20v1b.png";
import Image3 from "../Images/projects/pursuit/floor-plans/c20v1g1.png";
import Image4 from "../Images/projects/pursuit/floor-plans/c20v1g2.png";
import Image5 from "../Images/projects/pursuit/floor-plans/l30v1a.png";
import Image6 from "../Images/projects/pursuit/floor-plans/l30v1b.png";
import Image7 from "../Images/projects/pursuit/floor-plans/l30v1g.png";

const PursuitFloorImages = () => {

    const images = [
      { id: 1, imgName: Image1, alt: "", tag: "C20 V1a" },
      { id: 2, imgName: Image2, alt: "", tag: "C20 V1b" },
      { id: 3, imgName: Image3, alt: "", tag: "C20 V1g1" },
      { id: 4, imgName: Image4, alt: "", tag: "C20 V1g2" },
      { id: 5, imgName: Image5, alt: "", tag: "L30 V1a" },
      { id: 6, imgName: Image6, alt: "", tag: "L30 V1b" },
      { id: 7, imgName: Image7, alt: "", tag: "L30 V1g" },  
    ];
    
  
    return (
      <div>
  
        <Container fluid className="ps-0 pe-0">
          <SimpleReactLightbox>
            <SRLWrapper>
              <Row className="g-3">
                {images.map((item) => (
                  <Col md={3} xs={6} sm={6} key={item.id}>
                    <div className="m-1 text-center border border-dark p-1 rounded">
                      <a href={item.imgName}>
                        <Image
                          src={item.imgName}
                          alt={item.alt}
                          className="img-fluid"
                        />
                      </a>
                    </div>
                      <h6 className="text-center"> {item.tag} </h6>
                  </Col>
                ))}
              </Row>
            </SRLWrapper>
          </SimpleReactLightbox>
        </Container>
      </div>
    )
}

export default PursuitFloorImages
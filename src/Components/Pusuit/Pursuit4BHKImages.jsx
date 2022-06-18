import React from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap';
import SimpleReactLightbox, { SRLWrapper } from 'simple-react-lightbox';
import Image8 from "../Images/projects/pursuit/floor-plans/l45a.png";
import Image9 from "../Images/projects/pursuit/floor-plans/l45b.png";
import Image10 from "../Images/projects/pursuit/floor-plans/l45g.png";
import Image11 from "../Images/projects/pursuit/floor-plans/v50-lower.png";
import Image12 from "../Images/projects/pursuit/floor-plans/v50-upper.png";

const Pursuit4BHKImages = () => {

    const images = [
        { id: 8, imgName: Image8, alt: "", tag: "L45 V1a" },
        { id: 9, imgName: Image9, alt: "", tag: "L45 V1b" },
        { id: 10, imgName: Image10, alt: "", tag: "L45 V1g" },
        { id: 11, imgName: Image11, alt: "", tag: "V50 Lower" },
        { id: 12, imgName: Image12, alt: "", tag: "V50 Upper" }, 
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

export default Pursuit4BHKImages
import React from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap';
import SimpleReactLightbox, { SRLWrapper } from 'simple-react-lightbox';
import Image1 from "../Images/projects/after-rain/floor-plans/master-plan.png"
import Image2 from "../Images/projects/after-rain/floor-plans/v30.png"
import Image3 from "../Images/projects/after-rain/floor-plans/v50.png"

const RainFloorImages = () => {

    const images = [
      { id: 1, imgName: Image1, alt: "", tag: "Master Plan" },
      { id: 2, imgName: Image2, alt: "", tag: "V30" },
      { id: 3, imgName: Image3, alt: "", tag: "V50" },
    ]
  
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

export default RainFloorImages
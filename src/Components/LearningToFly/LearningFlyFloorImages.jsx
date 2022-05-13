import React from 'react'
import Image1 from "../Images/projects/learning-to-fly/floor-plan/floor-plan-1.png"
import { Col, Container, Image, Row } from 'react-bootstrap';
import SimpleReactLightbox, { SRLWrapper } from 'simple-react-lightbox';


const LearningFlyFloorImages = () => {

    const images = [
      { id: 1, imgName: Image1, alt: "", tag: "Floor Plan" },];
  
    return (
      <div>
  
        <Container fluid className="ps-0 pe-0">
          <SimpleReactLightbox>
            <SRLWrapper>
              <Row className="g-3 justify-content-center">
                {images.map((item) => (
                  <Col md={8} xs={6} sm={6} key={item.id}>
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

export default LearningFlyFloorImages
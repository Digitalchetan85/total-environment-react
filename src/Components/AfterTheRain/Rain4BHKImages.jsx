import React from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap';
import SimpleReactLightbox, { SRLWrapper } from 'simple-react-lightbox';
import Image10 from "../Images/projects/after-rain/floor-plans/v50v1-lower.png"
import Image11 from "../Images/projects/after-rain/floor-plans/v50v1-upper.png"

const Rain4BHKImages = () => {

    const images = [
      { id: 10, imgName: Image10, alt: "", tag: "V50 V1 Lower" },
      { id: 11, imgName: Image11, alt: "", tag: "V50 V1 Upper" },
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

export default Rain4BHKImages
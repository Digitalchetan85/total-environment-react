import React from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap';
import SimpleReactLightbox, { SRLWrapper } from 'simple-react-lightbox';
import Image1 from "../Images/projects/magic-free/floor-plans/floor-plan-1.png"

const MagicTreeFloorImages = () => {

    const images = [
      { id: 1, imgName: Image1, alt: "", tag: "" },];
  
    return (
      <div>
  
        <Container fluid className="ps-0 pe-0">
          <SimpleReactLightbox>
            <SRLWrapper>
              <Row className="g-3 justify-content-center">
                <h2 className="text-center">Floor Plan</h2>
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

export default MagicTreeFloorImages
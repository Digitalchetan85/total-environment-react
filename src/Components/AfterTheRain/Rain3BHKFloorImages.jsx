import React from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap';
import SimpleReactLightbox, { SRLWrapper } from 'simple-react-lightbox';
import Image2 from "../Images/projects/after-rain/floor-plans/v30v1a-lower.png"
import Image3 from "../Images/projects/after-rain/floor-plans/v30v1a-upper.png"
import Image4 from "../Images/projects/after-rain/floor-plans/v30v1b-lower.png"
import Image5 from "../Images/projects/after-rain/floor-plans/v30v1b-upper.png"
import Image6 from "../Images/projects/after-rain/floor-plans/v30v1c-lower.png"
import Image7 from "../Images/projects/after-rain/floor-plans/v30v1c-upper.png"
import Image8 from "../Images/projects/after-rain/floor-plans/v30v1d-lower.png"
import Image9 from "../Images/projects/after-rain/floor-plans/v30v1d-upper.png"

const Rain3BHKFloorImages = () => {

    const images = [
      { id: 2, imgName: Image2, alt: "", tag: "V30 V1A Lower" },
      { id: 3, imgName: Image3, alt: "", tag: "V30 V1A Upper" },
      { id: 4, imgName: Image4, alt: "", tag: "V30 V1B Lower" },
      { id: 5, imgName: Image5, alt: "", tag: "V30 V1B Upper" },
      { id: 6, imgName: Image6, alt: "", tag: "V30 V1C Lower" },
      { id: 7, imgName: Image7, alt: "", tag: "V30 V1C Upper" },
      { id: 8, imgName: Image8, alt: "", tag: "V30 V1D Lower" },
      { id: 9, imgName: Image9, alt: "", tag: "V30 V1D Upper" },
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

export default Rain3BHKFloorImages
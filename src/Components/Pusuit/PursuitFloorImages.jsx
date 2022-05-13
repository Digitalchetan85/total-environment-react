import React from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap';
import SimpleReactLightbox, { SRLWrapper } from 'simple-react-lightbox';
import Image1 from "../Images/projects/pursuit/floor-plans/floor-plan-1.png"
import Image2 from "../Images/projects/pursuit/floor-plans/floor-plan-2.png"
import Image3 from "../Images/projects/pursuit/floor-plans/floor-plan-3.png"
import Image4 from "../Images/projects/pursuit/floor-plans/floor-plan-4.png"
import Image5 from "../Images/projects/pursuit/floor-plans/floor-plan-5.png"
import Image6 from "../Images/projects/pursuit/floor-plans/floor-plan-6.png"
import Image7 from "../Images/projects/pursuit/floor-plans/floor-plan-7.png"
import Image8 from "../Images/projects/pursuit/floor-plans/floor-plan-8.png"
import Image9 from "../Images/projects/pursuit/floor-plans/floor-plan-9.png"
import Image10 from "../Images/projects/pursuit/floor-plans/floor-plan-10.png"
import Image11 from "../Images/projects/pursuit/floor-plans/floor-plan-11.png"
import Image12 from "../Images/projects/pursuit/floor-plans/floor-plan-12.png"
import Image13 from "../Images/projects/pursuit/floor-plans/floor-plan-13.png"
import Image14 from "../Images/projects/pursuit/floor-plans/floor-plan-14.png"
import Image15 from "../Images/projects/pursuit/floor-plans/floor-plan-15.png"

const PursuitFloorImages = () => {

    const images = [
      { id: 1, imgName: Image1, alt: "", tag: "Floor Plan-1" },
      { id: 2, imgName: Image2, alt: "", tag: "Floor Plan-2" },
      { id: 3, imgName: Image3, alt: "", tag: "Floor Plan-3" },
      { id: 4, imgName: Image4, alt: "", tag: "Floor Plan-4" },
      { id: 5, imgName: Image5, alt: "", tag: "Floor Plan-5" },
      { id: 6, imgName: Image6, alt: "", tag: "Floor Plan-6" },
      { id: 7, imgName: Image7, alt: "", tag: "Floor Plan-7" },      
      { id: 8, imgName: Image8, alt: "", tag: "Floor Plan-8" },
      { id: 9, imgName: Image9, alt: "", tag: "Floor Plan-9" },
      { id: 10, imgName: Image10, alt: "", tag: "Floor Plan-10" },
      { id: 11, imgName: Image11, alt: "", tag: "Floor Plan-11" },
      { id: 12, imgName: Image12, alt: "", tag: "Floor Plan-12" },
      { id: 13, imgName: Image13, alt: "", tag: "Floor Plan-13" },
      { id: 14, imgName: Image14, alt: "", tag: "Floor Plan-14" },
      { id: 15, imgName: Image15, alt: "", tag: "Floor Plan-15" },
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
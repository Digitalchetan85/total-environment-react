import React from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap';
import SimpleReactLightbox, { SRLWrapper } from "simple-react-lightbox";
import Image1 from '../Images/projects/quite-earth/floor-plans/master-plan.png';
import Image2 from '../Images/projects/quite-earth/floor-plans/u10x.png';
import Image3 from '../Images/projects/quite-earth/floor-plans/u10y.png';
import Image4 from '../Images/projects/quite-earth/floor-plans/h20a.png';
import Image5 from '../Images/projects/quite-earth/floor-plans/h20b.png';
import Image6 from '../Images/projects/quite-earth/floor-plans/u20.png';
import Image7 from '../Images/projects/quite-earth/floor-plans/villa-lower.png';
import Image8 from '../Images/projects/quite-earth/floor-plans/villa-high.png';

const QuietEarthMasterPlanImages = () => {

  const images = [
    { id: 1, imgName: Image1, alt: "", tag: "Master Plan" },
    { id: 2, imgName: Image2, alt: "", tag: "2 Bed Room" },
    { id: 3, imgName: Image3, alt: "", tag: "2 Bed Room" },
    { id: 4, imgName: Image4, alt: "", tag: "3 Bed Room" },
    { id: 5, imgName: Image5, alt: "", tag: "3 Bed Room" },
    { id: 6, imgName: Image6, alt: "", tag: "4 Bed Room" },
    { id: 7, imgName: Image7, alt: "", tag: "Villa Lower" },
    { id: 8, imgName: Image8, alt: "", tag: "Villa Upper" },
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

export default QuietEarthMasterPlanImages
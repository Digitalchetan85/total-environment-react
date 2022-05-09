import React from "react";
import { Col, Container, Row, Image } from "react-bootstrap";
import Location from "../Images/projects/pursuit/pursuit-loc.png";

const MagicTreeLocation = () => {
  return (
    <div id="location" className="py-3 py-md-3">
      <Container>
        <h2 className="text-center py-md-3">Location</h2>
        <Row className=" justify-content-center">
          <Col md={8}>
            {/* <div className="text-center">
              <Image src={Location} className="img-fluid" alt="" />
            </div> */}
            <div className="text-center">
              {/* <h2 className="text-center">Location Map</h2> */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d62237.39718524049!2d77.537048439209!3d12.85378147853406!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x55b4658af33576bd!2zMTLCsDUxJzM0LjciTiA3N8KwMzEnNDYuOCJF!5e0!3m2!1sen!2sus!4v1651227675756!5m2!1sen!2sus"
                width="100%"
                height="450"
              ></iframe>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default MagicTreeLocation;

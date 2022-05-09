import React from "react";
import { Col, Container, Row, Image } from "react-bootstrap";
import Location from "../Images/projects/pursuit/pursuit-loc.png";

const RainLocation = () => {
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
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d76088.215476412!2d77.58965171238039!3d13.159025522334654!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xe26b7f09723c0bf8!2zMTPCsDA5JzI2LjUiTiA3N8KwMzYnMDUuMSJF!5e0!3m2!1sen!2sus!4v1651225295445!5m2!1sen!2sus"
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

export default RainLocation;

import React from 'react'
import { Accordion, Col, Container, Row } from "react-bootstrap";

const QuietFAQ = () => {
  return (
    <>
<section id="faq" className="py-3 py-md-5 bg-light">
          <Container>
            <Row className="justify-content-center">
              <h2 className=" py-3"> Frequently Asked Questions </h2>
              <Col md={6}>
                <Accordion>
                  <Accordion.Item eventKey="0" className="mb-3">
                    <Accordion.Header>Total Environment in That Quiet Earth Configuration In Project?</Accordion.Header>
                    <Accordion.Body>
                    Total environment In That Quiet Earth 2, 3, 4 Bed Room Apartments & 3 Bed Room Villas.
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="1" className="mb-3">
                    <Accordion.Header>What is the price of a 2, 3, 4 Bed Room Apartments & 3 Bed Room Villas in Total Environment in That Quiet earth?</Accordion.Header>
                    <Accordion.Body>
                    Total Environment in That Quiet earth Prices-<br />2 Bed Room- 1.33 Cr + GST + Reg.<br />3 Bed Room- 2.25 Cr + GST + Reg.<br />4 Bed Room- 2.85 Cr + GST + Reg.<br />3 Bed Room Villas- 4.56 Cr + GST + Reg.
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="2" className="mb-3">
                    <Accordion.Header>Where is Total environment In That Quiet earth located in North Bangalore?</Accordion.Header>
                    <Accordion.Body>
                    Total environment In That Quiet Earth Location Avalahalli Road, Off Hennur Main Road.
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </Col>
              <Col md={6}>
                <Accordion>
                  <Accordion.Item eventKey="0" className="mb-3">
                    <Accordion.Header>What is the total land of Total environment In That Quiet earth?</Accordion.Header>
                    <Accordion.Body>
                    The total land area of Total environment In That Quiet earth 14.5 Acres.
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="1" className="mb-3">
                    <Accordion.Header>What are the Key Amenities at Total environment In That Quiet earth?</Accordion.Header>
                    <Accordion.Body>
                    The amenities at Total environment In That Quiet earth include
                    <p>Library, Games Room for Board Games, Toddlers' Pool, Swimming Pool, Billiards, Badminton Courts, Heated Pool, 100% Power Backup</p>
                    <p>CCTV Camera, Children’s Play Area, Dog Park, Golf Simulator, Guest Suites, Indoor Games, Multipurpose Hall, Playground, Squash Courts</p>
                    <p>Steam Room, Table Tennis, Tennis Courts, Gymnasium</p>
                    </Accordion.Body>
                  </Accordion.Item>
                  
                  <Accordion.Item eventKey="2" className="mb-3">
                    <Accordion.Header>What is the Possession Time for Total environment In That Quiet earth?</Accordion.Header>
                    <Accordion.Body>
                    Total environment In That Quiet earth completion date Flats May 2024 & Villas 2025.
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </Col>
            </Row>
          </Container>
        </section>
    </>
  )
}

export default QuietFAQ
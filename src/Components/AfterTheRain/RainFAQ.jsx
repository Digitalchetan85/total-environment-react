import React from 'react'
import { Accordion, Col, Container, Row } from "react-bootstrap";

const RainFAQ = () => {
  return (
    <>
<section id="faq" className="py-3 py-md-5 bg-light">
          <Container>
            <Row className="justify-content-center">
              <h2 className=" py-3"> Frequently Asked Questions </h2>
              <Col md={6}>
                <Accordion>
                  <Accordion.Item eventKey="0" className="mb-3">
                    <Accordion.Header>Total Environment After the Rain Configuration in Project?</Accordion.Header>
                    <Accordion.Body>
                    Total Environment After the Rain 3 Bed Room Villas.
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="1" className="mb-3">
                    <Accordion.Header>What is the price of a 3 BHK Villa in Total Environment After the Rain?</Accordion.Header>
                    <Accordion.Body>
                    The price of a 3 BHK Villa Home Prices Starting from INR 5.17 Cr (inclusive of GST).
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="2" className="mb-3">
                    <Accordion.Header>Where is Total environment After the Rain located in North Bangalore?</Accordion.Header>
                    <Accordion.Body>
                    The Villa development project is located Off Bellary Road. It is located in a very serene area & close to Yelahanka.
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </Col>
              <Col md={6}>
                <Accordion>
                  <Accordion.Item eventKey="0" className="mb-3">
                    <Accordion.Header>What is the total landarea of Total environment After the Rain?</Accordion.Header>
                    <Accordion.Body>
                    The total land area of Total environment After the Rain 45 acres.
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="1" className="mb-3">
                    <Accordion.Header>What are the Key Amenities Total environment After the Rain?</Accordion.Header>
                    <Accordion.Body>
                    The amenities at Total environment After the Rain include Children’s Play Area, Multipurpose Hall, Swimming Pool, Gymnasium, Billiards, Heated Pool, Library, Squash Courts, Table Tennis
                    <p>Toddlers' Pool and much more.</p>
                    </Accordion.Body>
                  </Accordion.Item>
                  
                  <Accordion.Item eventKey="2" className="mb-3">
                    <Accordion.Header>What is the Possession Time for Total environment After the Rain?</Accordion.Header>
                    <Accordion.Body>
                    After the Rain completion date May 2022.
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

export default RainFAQ
import React, { useState } from "react";
import {
  Col,
  Button,
  Container,
  Image,
  Nav,
  Navbar,
  NavDropdown,
  Row,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import Logo from "../Images/logo-1.png";
import Virtual from "../Images/360.png";
import Modals from "../Includes/Modals";

const Topheader = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="sticky-top" id="navbar">
      {/* <div id="top-header" className="p-2 p-md-1 bg-light">
        <Container>
          <Row className="justify-content-center">
            <Col
              md={4}
              className="d-none d-md-block text-info fw-bold align-self-center"
            >
              <i className="fa fa-map-marker-alt"></i> Bangalore.
            </Col>
            <Col md={4} xs={5} className="align-self-center">
              <div className="text-center">
                <Button
                  variant="info"
                  size="sm"
                  onClick={handleShow}
                  className="custom-button text-white"
                >
                  <i className="fa fa-spinner fa-flip fa-download text-white"></i> Brochure
                </Button>
              </div>
            </Col>
            <Col md={4} xs={7} className="align-self-center">
              <div className="text-center">
                <a
                  href="tel:+919036611010"
                  className="anchor p-0 btn btn-transparent fw-bold text-info m-1"
                >
                  <i className="fa fa-phone-volume"></i> +91-90366 11010
                </a>
              </div>
            </Col>
          </Row>
        </Container>
      </div> */}
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="white"
        variant="light"
        className="shadow-sm bg-white"
      >
        <Container>
          <Navbar.Brand as={Link} to="/">
            <Image src={Logo} className="img-fluid" alt="" />
          </Navbar.Brand>
          {/* <Nav.Link
          className="btn-sm btn-danger text-white d-block d-md-none px-3 border-0"
          href="tel:080959 99000 "
        >
          <i className="fa fa-phone-volume"></i> 80959 99000
        </Nav.Link> */}
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto me-auto">
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>
              <Nav.Link href="#overview">Overview</Nav.Link>
              <Nav.Link href="#master-plan">Master Plan</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
              <Nav.Link href="#location">Location</Nav.Link>
            </Nav>
            <Nav>
              <a
                href="tel:+919036611010"
                className="btn btn-dark fw-bold text-white m-1"
              >
                <i className="fa fa-phone-volume"></i> Call Now
              </a>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Modals
        show={show}
        handleClose={handleClose}
        title="Download Brochure"
        projectid="57a99891-ec20-472a-b230-187e20fee71f"
      />
    </div>
  );
};

export default Topheader;

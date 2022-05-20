import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Contact from "./Contact";
import Info from "./Info";

const About = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <Container fluid className="">
        <Row className="justify-content-center">
          <Col md={9}>
            <h1 className="text-center py-5">About Total Environment Homes</h1>
            <h4>At Total Environment the vision is:</h4>
            <p>
              To provide an unsurpassed living experience through the creation
              of sensitively designed inspiring spaces.
            </p>
            <p>
              <strong>We work together as an integrated team - </strong> from
              concept to completion. This high degree of interaction between our
              design, construction and business development teams ensures that
              every little detail gets the close attention it deserves.
            </p>
            <p>
              <strong>Our Teams</strong> include skilled craftsmen from all
              parts of the country. Carpenters from Gujarat, Floor and Tile
              laying masons from Rajasthan, Formwork and Shuttering carpenters
              from West Bengal, Steel barbenders from Bihar and Metal
              fabricators from Maharashtra. Our promoters are professional
              Architects from India's best institutes.
            </p>
            <p>
              <strong>School for our construction workers at WOYM</strong>
              <br />
              This initiative is managed with support from the Azim Premji
              Foundation.
              <br />
              The program offers children of construction labour an opportunity
              to learn and move into mainstream education.
            </p>
            <p>
              <strong>The Experience</strong> Our customers find in us a
              partner, who in a complete departure from the traditional industry
              perception, seeks to make the whole experience as warm and
              personal as the homes we deliver.
            </p>
            <p>
              <strong>Bringing The outdoors in</strong> A first-of-its kind
              innovation in residential real estate projects worldwide, in 1997
              we introduced the concept of cantilevered terrace gardens with
              every apartment. Since then this has become an integral part of
              all our projects. Our gardens have grown larger and now include
              features like water bodies and wood decks - bringing the outdoors
              in and taking the indoors out. Our projects are also noted for
              their creeper-covered pergolas and landscaping.
            </p>
            <p>
              <strong>Customization</strong> We believe that we are perhaps the
              only firm in the country that allows home owners to customise
              every little detail of their homes. Our homeowners are encouraged
              to customise their homes to match their distinct tastes and
              lifestyles.
            </p>
            <p>
              <strong>eBuild: </strong> Our online proprietary tool helps you
              customise almost every aspect of your home. You can choose from a
              wide range of space layout options, styles, colours and themes.
              eBuild can even provide instant information on costs and
              feasibility. Our in-house consultants will guide and assist you
              during the process.
            </p>
            <p>
              <strong>Materials and Finishes:</strong> We are focused on
              creating physical environments that are in harmony with their
              surroundings. It is our attempt to give our buildings a character
              that is essentially grounded in nature. Our use of natural
              construction materials like wire-cut bricks and exposed form
              finished concrete, we believe, has added a new dimension to
              building aesthetics. Besides being maintenance-free, these
              materials age beautifully with time.
            </p>
            <p>
              <strong>Technology:</strong> Our projects come with a host of
              technological features that have been introduced to truly enhance
              the quality of life of people who live in them. From the quality
              of finish to our RCC work, to the use of eBuild - our online tool
              to help customise your home, to the state-of-the-art home
              automation systems that make interaction with your home seamless
              and a pleasurable experience, technology is helping us deliver
              advanced homes of high quality, long life and efficiency.
            </p>
            <p>
              <strong>In-house Construction Teams</strong> Doing everything
              in-house from start to handover and after, we are able to ensure
              quality and control costs: benefits that we pass on to our
              customers.
            </p>
            <p>
              <strong>Quality</strong> It's not just in the sourcing of the
              best; it's also in how we labour over all aspects of our work -
              from design to workmanship - that sets us apart.
            </p>
            <p>
              <strong>Transparency & Ethics :</strong> Our ability to keep
              things simple, transparent and above board has helped build the
              trust our customers place in us. We seek to develop relationships
              that are as enduring as our buildings. We keep a stream of honest
              and timely communication going with our customers, building bonds
              even as we build homes.
            </p>
            {/* <div className="text-center">
              <Button variant="dark" onClick={handleShow} className="my-3">
                Contact Us For More Details
              </Button>
            </div> */}
            <Info />
          </Col>
          <Col md={3} className="bg-light">
            <Contact />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;

import React, { useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import Contact from "../Includes/Contact";
import Info from "../Includes/Info";
import MainSlider from "../Includes/Mainslider";
import Projects from "../Includes/Projects";
// import MainSlider from '../Includes/Mainslider'

const Home = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <MainSlider />
      <Container fluid className="ps-0 pe-0 ps-md-4 pe-md-4">
        <Row className="ms-0 me-0">
          <Col md={9}>
            <div id="overview">
              <Container fluid className="ps-0 pe-0">
                <Row>
                  <Col md={12}>
                    <div className="p-2">
                      <h1 className="text-center py-2 pt-md-5 fs-2">
                        Total Environment Homes
                      </h1>
                      <h3>
                        With just 10,000 rupees and a dream, Total Environment
                        was founded by Kamal Sagar.
                      </h3>
                      <p className="py-3 py-md-2">
                        Over two decades later, Total Environment has delivered
                        more than 4 million square feet to over 1,200 customers
                        across dozens of projects in Bangalore, Hyderabad and
                        Pune. While these numbers demonstrate our scale of
                        operations and our ability to influence modern housing,
                        they only tell one side of the story. What truly moves
                        and inspires us is the love for design and the joy of
                        giving people a place to proudly call home. Our
                        commitment to further design thinking and practices will
                        always be first and foremost, no matter what project
                        we’re embarking on.
                      </p>
                      <h3>Manifesto</h3>
                      <p>
                        Here’s to making the places we go more beautiful, the
                        experiences we have more enjoyable, and the things we
                        eat and drink more delicious. Here’s to the passion that
                        allows us to hear music and get inspired to design a
                        radically new space. Here’s to that voice in our head
                        that says “we can do even better.” Whether it’s a home,
                        a resort, or great food and craft beer, you can expect
                        it to be sensitively designed, completely personal and
                        totally original. Because we don’t allow conventions to
                        steer us, conveniences to mislead us or commerce to
                        define us. Instead, inspiration, intention and integrity
                        lead the way. We live by our passions and hope to ignite
                        yours.
                      </p>
                      <h3>Culture & Leadership Principles</h3>
                      <p>
                        Successful and less successful people do not vary
                        greatly in their abilities, but only in their desire to
                        reach their potential. At Total Environment, we
                        encourage leaders to smash the glass ceilings and to
                        never settle for mediocrity. Our leaders benchmark
                        themselves against the best in the world and always lead
                        by example.
                      </p>
                      <h3>Maintain High Standards</h3>
                      <p>
                        Our passion is our number one currency. It drives our
                        relentless pursuit for the extraordinary and inspires us
                        to dive deep into every challenge we seek out and
                        accept. We choose meticulousness over mediocrity and
                        always lead by example.{" "}
                      </p>
                      <p>
                        At Total Environment, we started with a simple mission:
                        to make homes worth living in. This simple idea took us
                        places we couldn’t have initially imagined. Over two
                        decades later, we still pursue this ideal in everything
                        we touch, make and do.{" "}
                      </p>
                      <p>
                        We build your home around you, just the way you want it
                        to be, just how you like to live your life, not the
                        other way around. “Our Differences” are a manifestation
                        of these possibilities, coupled with our passion for
                        making a difference to the world.
                      </p>

                      <div className="text-center">
                        <Button
                          variant="dark"
                          onClick={handleShow}
                          className="my-3"
                        >
                          Contact Us For More Details
                        </Button>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Container>
            </div>
            <Projects />

            <Info />
            <div id="videos">
              <Container fluid className="py-5 bg-light">
                <Row>
                  <h3 className="text-center py-3">Videos</h3>
                  <Col md={6}>
                    <div className="ratio ratio-4x3">
                      <iframe
                        title="vimeo-player"
                        src="https://player.vimeo.com/video/469088856?h=27b91458d6"
                        width="640"
                        height="360"
                      ></iframe>
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="ratio ratio-4x3">
                      <iframe
                        title="vimeo-player"
                        src="https://player.vimeo.com/video/471115191?h=6a343e97a5"
                        width="640"
                        height="360"
                      ></iframe>
                    </div>
                  </Col>
                </Row>
              </Container>
            </div>
          </Col>
          <Col md={3} className="bg-light">
            
            <Contact />
           
            
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;

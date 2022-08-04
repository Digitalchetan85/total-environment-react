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
    <div id="bg">
      <MainSlider />
      <Container fluid className="ps-0 pe-0 ps-md-4 pe-md-4">
        <Row className="ms-0 me-0">
          <Col md={8}>
            <div id="text" className="py-3 py-md-5">
              <Container>
                <Row>
                  <Col md={12}>
                    <div className="">
                      <h2 className="fs-4 py-3 text-center">Total Enviroment Projects Overview</h2>
                      <p className="">
                        <a href="/projects/quiet-earth" target="_blank" className="text-decoration-none">Total Environment In That Quiet Earth</a>, an exclusive
                        community of sensitively-designed homes sites off Hennur
                        Main Road, in North Bangalore. This area is one of the
                        fastest-growing economic hubs with a well-developed
                        social infrastructure that includes reputable schools,
                        colleges, restaurants, malls, and hotels, making it a
                        great place for urban living. Each 2, 3, and 4-bedroom
                        homes Prices Starting from INR 1.33 Cr. V35 Villas
                        starting from INR 4.56 Cr + GST, each of which is
                        crafted around you and your family, to comfortably meet
                        your functional needs and lifestyle preferences call it
                        As Total Environment Homes. </p>
                        <p className=""><a href="/projects/pursuit" className="text-decoration-none">Total Environment Pursuit of
                        a Radical Rhapsody</a> Located in Whitefield, the heart of
                        India’s Silicon Valley, is an exclusive community of
                        apartments, beautiful homes with green roofs, and a
                        central community park. Prices Starting for C20 3 Bed
                        from INR 2.99 Cr. Sitting on the edge of a small lake,
                        the project includes our signature earth-sheltered homes
                        with four bedrooms, our popular C20 layout, our unique
                        lake-facing L30 three-bedroom apartments, and our
                        special L45 four-bedroom apartments that step back from
                        the lake with open-to-sky gardens. Pursuit of a Radical
                        Rhapsody was built with an innovative idea in mind: a
                        tree on every terrace, even as high as on the 27th
                        floor. In the project’s L30 and L45 apartments, every
                        garden is designed to house a tree in a specially
                        developed tree tub. We invite you to visit and see how
                        this idea comes to life. </p> <p className=""><a href="/projects/rain" className="text-decoration-none"> Total Environment After the Rain</a>
                        is our sensitively-designed community of earth-sheltered
                        homes with green roofs that celebrate nature at its
                        finest. Prices Starting from INR 5.17 Cr (inclusive of
                        GST). Cleverly designed to appear low and inviting from
                        the outside, while being spacious duplex homes on the
                        inside, these homes charm every step of the way and
                        provide the always-on connection with nature. </p> <p className="">Located in
                        Whitefield, the heart of India’s Silicon Valley, <a href="/projects/windmill" className="text-decoration-none">Total
                        Environment Windmills</a> of Your Mind is an exclusive
                        community of apartments and earth-sheltered homes with
                        green roofs. Prices Starting from INR 6.4 Cr. This
                        community sits on the edge of a small lake and features
                        a central park, a beautiful earth-sheltered clubhouse,
                        and a lush-green, expansive landscape. With the goal of
                        redefining large-scale housing, Windmills of Your Mind
                        provides a blueprint for high quality, sustainable
                        community living. The aesthetic and construction quality
                        of these homes is unparalleled. Right from the green
                        roofs of the villas and the community center, to the
                        landscaped gardens of apartments, Nature resonates
                        throughout this community. Almost all living spaces in
                        these homes open onto private gardens while large glass
                        windows and French doors ensure that the living spaces
                        are always awash with natural light.
                      </p>
                    </div>
                  </Col>
                </Row>
              </Container>
            </div>
            <Projects />
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

                      {/* <div className="text-center">
                        <Button
                          variant="dark"
                          onClick={handleShow}
                          className="my-3"
                        >
                          Contact Us For More Details
                        </Button>
                      </div> */}
                      <Info />
                    </div>
                  </Col>
                </Row>
              </Container>
            </div>
            <div id="videos">
              <Container fluid className="py-5">
                <Row className="justify-content-center">
                  <h3 className="text-center py-3">Videos</h3>
                  <Col md={10}>
                    <div className="ratio ratio-4x3">
                      <iframe
                        title="vimeo-player"
                        src="https://player.vimeo.com/video/469088856?h=27b91458d6"
                        width="640"
                        height="360"
                      ></iframe>
                    </div>
                  </Col>
                  {/* <Col md={6}>
                    <div className="ratio ratio-4x3">
                      <iframe
                        title="vimeo-player"
                        src="https://player.vimeo.com/video/471115191?h=6a343e97a5"
                        width="640"
                        height="360"
                      ></iframe>
                    </div>
                  </Col> */}
                </Row>
              </Container>
            </div>
          </Col>
          <Col md={4} className="">
            <Contact />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;

import React from "react";
import { Col, Container, Row, Table } from "react-bootstrap";
import Contact from "../Includes/Contact";
import Info from "../Includes/Info";
import OtherProjectsPursuit from "./OtherProjectsPursuit";
import PursuitGallery from "./PursuitGallery";
import PursuitLocation from "./PursuitLocation";
import PursuitMasterPlan from "./PursuitMasterPlan";
import PursuitPrice from "./PursuitPrice";
import PursuitSlider from "./PursuitSlider";

const Pursuit = () => {
  return (
    <div>
      <PursuitSlider />
      <Container fluid>
        <Row>
          <Col md={9} className="">
            <div id="overview" className="py-5 py-md-5 bg-light">
              <Container fluid className="ps-0 pe-0">
                <Row>
                <h2 className="pb-2 text-center py-2 py-md-5 fs-3">
                      Project Highlights
                    </h2>
                  <Col md={12}>
                    
                    <span className="bg-danger position-absolute start-50 span-line"></span>
                    <Table className="table table-bordered align-middle">
                      <tbody>
                        <tr>
                          <th>RERA No</th>
                          <td>PRM/KA/RERA/1251/446/PR/171014/000433</td>
                        </tr>
                        <tr>
                          <th>Development Size</th>
                          <td>34 Acres (Approx.)</td>
                        </tr>
                        <tr>
                          <th>No. of Units</th>
                          <td>799 Units</td>
                        </tr>
                        <tr>
                          <th>Unit Variants</th>
                          <td>
                            3 BHK & 4 BHK Apartments <br />4 BHK Villas
                          </td>
                        </tr>
                        <tr>
                          <th>No. of Floors</th>
                          <td>G + 28 Floors</td>
                        </tr>
                      </tbody>
                    </Table>
                  </Col>
                </Row>
              </Container>
            </div>
            <div className="py-3 py-md-3">
              <Container fluid className="ps-0 pe-0">
                <Row>
                  <Col md={12}>
                    <h2 className="py-3 text-center fs-4">
                      About Total Environment Pursuit Of A Radical Rhapsody
                    </h2>
                    <p>
                      Pursuit of a Radical Rhapsody is located on the edge of a
                      small lake in Whitefield - the IT hub of India’s Silicon
                      Valley, in the vicinity of the best international schools,
                      hospitals, malls and five-star hotels. Whitefield’s urbane
                      culture and lifestyle have made it home to well-traveled
                      professionals. Against the backdrop of Bangalore’s
                      glorious weather, this burgeoning suburb is one of the
                      best investment destinations in India.
                    </p>
                    <h6>
                      PHYSICAL ENVIRONMENTS IN HARMONY WITH THEIR SURROUNDINGS
                    </h6>
                    <p>
                      Adjacent to the project is a small lake and the project
                      has been designed with a board walk along the lake. The
                      apartments at the lower level step back from the lake,
                      keeping the scale in mind. With tons of landscaping and
                      several hundred trees all over the campus, earth sheltered
                      roofs over the villas and terrace gardens with every
                      single home, we do expect the micro climate inside the
                      project to be a little better than outside and a reduction
                      in the “urban heat island effect”.
                    </p>

                    <h6>LIVING AREAS</h6>
                    <p>
                      There are several different home products in this project
                      – ranging from our V50 4 bedroom villas to our C20 and L30
                      3 bedroom apartments a Visualization of the Boardwalk and
                      our L45 stepped 4 bedroom apartments with open-to-sky
                      gardens facing the lake, the L30 and L45 apartments have
                      been designed to house trees in their gardens, made
                      possible through specially developed technology, to
                      provide a sense of home on the ground even on the 25th
                      floor.
                    </p>
                    <h6>THE EXPERIENCE</h6>
                    <p>
                      We have tried to perfect our homes over time to provide a
                      sense of warmth, privacy, openness and tranquility in an
                      increasingly stressful world. Almost every space opens out
                      onto a landscaped garden, complete with a sprinkler system
                      and drip irrigation system, and large glass panels bring
                      in natural light into the home. Our commitment to quality
                      extends well beyond the customization and delivery of your
                      home. We assume responsibility for property maintenance
                      which includes a comprehensive slew of services that
                      ensure competent and timely care of your home.
                    </p>
                  </Col>
                </Row>
              </Container>
            </div>

            <div className="py-3 py-md-5 bg-light" id="master-plan">
              <Container fluid className="ps-0 pe-0">
                <Row>
                  <Col md={12}>
                    <PursuitMasterPlan />
                  </Col>
                </Row>
              </Container>
            </div>

            <div className="py-3 py-md-3" id="amenites">
              <Container fluid className="ps-0 pe-0">
                <Row className="justify-content-center">
                  <h2 className="text-center py-md-3 py-2 fs-3">Amenities</h2>
                  <Col md={4} xs={6} className="align-self-center">
                    <ul>
                      <li>Swimming Pool</li>
                      <li>Billiards</li>
                      <li>Table Tennis</li>
                      <li>Tennis Courts</li>
                      <li>Multipurpose Hall </li>
                    </ul>
                  </Col>
                  <Col md={4} xs={6}>
                    <ul>
                      <li>Well-equipped Gymnasium</li>
                      <li>Library</li>
                      <li>Squash Courts</li>
                      <li>Toddlers' Pool Well-equipped</li>
                    </ul>
                  </Col>
                </Row>
              </Container>
            </div>
            <div className="py-3 py-md-5" id="pricing">
              <Container fluid className="ps-0 pe-0">
                <Row>
                  <PursuitPrice />
                  <Info />
                  <PursuitGallery />
                  <PursuitLocation />
                  {/* <VirtualTour /> */}
                </Row>
              </Container>
            </div>
          </Col>
          <Col md={3} className="bg-light">
            <Contact />
          </Col>
        </Row>
      </Container>
      <OtherProjectsPursuit />

      {/* <FixedIcons /> */}
    </div>
  );
};

export default Pursuit;

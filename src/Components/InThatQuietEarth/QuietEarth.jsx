import React from "react";
import { Col, Container, Row, Table } from "react-bootstrap";
import Contact from "../Includes/Contact";
import FixedIcons from "../Includes/FixedIcons";
import Info from "../Includes/Info";
import OtherProjectsQuietEarth from "./OtherProjectsQuietEarth";
import QuietEarthLocation from "./QuietEarthLocation";
import QuietEarthMasterPlan from "./QuietEarthMasterPlan";
import QuietEarthPrice from "./QuietEarthPrice";
import QuietEarthSlider from "./QuietEarthSlider";
import QuietFAQ from "./QuietFAQ";

const QuietEarth = () => {
  return (
    <div>
      <QuietEarthSlider />
      <Container fluid>
        <Row>
          <Col sm={12} md={12} lg={8} className="">
            <div id="overview" className="py-5 py-md-5">
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
                          <td>
                            PRM/KA/RERA/1251/446/PR/180519/001745
                            <br />
                            PRM/KA/RERA/1251/446/PR/201001/003630
                          </td>
                        </tr>
                        <tr>
                          <th>Project Location</th>
                          <td>Bileshevale, Hennur Road</td>
                        </tr>
                        <tr>
                          <th>Total Land Area</th>
                          <td>28 Acres</td>
                        </tr>
                        <tr>
                          <th>No. of Units</th>
                          <td>736 (Block 01 Units), 324 (Block 02 Units), 55 Villas</td>
                        </tr>
                        <tr>
                          <th>Towers & Blocks</th>
                          <td>4 Towers & 2B + G + 36 Floors</td>
                        </tr>
                        <tr>
                          <th>Unit Variants</th>
                          <td>2BHK, 3BHK, 4 BHK & Villas</td>
                        </tr>
                        <tr>
                          <th>Possession Time</th>
                          <td>Dec 2022 Onwards</td>
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
                    <h2 className="py-2 text-center fs-4">
                      About Total Environment In That Quiet Earth
                    </h2>
                    <p>
                      Homes at In That Quiet Earth have been created for people
                      who share our passion for design, quality, and
                      craftsmanship. Featuring large glass panels that bring the
                      outdoors in, each home is built with signature natural
                      materials that age beautifully.
                    </p>
                    <p>
                      This offers family homes with a host of innovative
                      features that are smart and modern, yet inspiring and
                      inviting.
                    </p>
                    <p>
                      Highlights of the community are the green roofs, terrace
                      garden, distinctive landscaping along wide, well-connected
                      paths that are bike and pedestrian-friendly. Development
                      of the Property will include a Clubhouse with
                      well-equipped gym, swimming pool, outdoor space, and a
                      children’s playground.
                    </p>
                  </Col>
                </Row>
              </Container>
              <Info />
            </div>

            <div className="py-3 py-md-5 bg-light" id="master-plan">
              <Container fluid className="ps-0 pe-0">
                <Row>
                  <h2 className="text-center py-2">Floor Plans</h2>
                  <Col md={12}>
                    <QuietEarthMasterPlan />
                  </Col>
                </Row>
              </Container>
            </div>

            <div className="py-3 py-md-5 bg-light" id="amenites">
              <Container fluid className="ps-0 pe-0">
                <Row>
                  <h4 className="text-center">
                    Amenities
                    <br />A young body is a young mind
                  </h4>
                  <p>
                    <strong>
                      In today's fast-paced life, there is a need for everyone
                      to be healthy. A fit body leads to a calmer mind, and one
                      that can deal with the pressures of today.
                    </strong>
                  </p>
                  <Col md={3} xs={6} sm={6}>
                    <ul>
                      <li>Cafe</li>
                      <li>Creche</li>
                      <li>Clinic</li>
                      <li>Dog Park</li>
                      <li>Library</li>
                      <li>Billiards</li>
                      <li>Gymnasium</li>
                      <li>Swimming Pool</li>
                    </ul>
                  </Col>
                  <Col md={3} xs={6} sm={6}>
                    <ul>
                      <li>Simulated Golf</li>
                      <li>Playground</li>
                      <li>Children’s Play Area</li>
                      <li>Table Tennis</li>
                      <li>Squash Court</li>
                      <li>Tennis Court</li>
                      <li>Basketball Court</li>
                      <li>Sewage Treatment Plant</li>
                    </ul>
                  </Col>
                  <Col md={3} xs={6} sm={6}>
                    <ul>
                      <li>Multipurpose Hall</li>
                      <li>Steam Room</li>
                      <li>Convinience Store</li>
                      <li>Spa And Salon</li>
                      <li>100% Power Back-Up</li>
                      <li>Open Air Theatre</li>
                      <li>Organic Waste Convertor</li>
                      <li>Battery Powered Golf Buggies</li>
                    </ul>
                  </Col>{" "}
                  <Col md={3} xs={6} sm={6}>
                    <ul>
                      <li>Guest Suites</li>
                      <li>Toddler Pool</li>
                      <li>Indoor Heated Pool</li>
                      <li>Games Room [Board Games]</li>
                      <li>Dance / Yoga Room</li>
                      <li>Children’s Play Area</li>
                      <li>CCTV For Security</li>
                    </ul>
                  </Col>
                </Row>
              </Container>
            </div>
            <div className="py-3 py-md-5" id="pricing">
              <Container fluid className="ps-0 pe-0">
                <Row>
                  <QuietEarthPrice />
                  <Info />
                  {/* <QuietEarthGallery /> */}
                  <QuietEarthLocation />
                  {/* <VirtualTour /> */}

                  <QuietFAQ />
                </Row>
              </Container>
            </div>
          </Col>
          <Col sm={12} md={12} lg={4} className="bg-light">
            <Contact />
          </Col>
        </Row>
      </Container>
      <OtherProjectsQuietEarth />

      <FixedIcons />
    </div>
  );
};

export default QuietEarth;

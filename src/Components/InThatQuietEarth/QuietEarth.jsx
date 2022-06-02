import React from "react";
import { Col, Container, Row, Table } from "react-bootstrap";
import Contact from "../Includes/Contact";
import Info from "../Includes/Info";
import OtherProjectsQuietEarth from "./OtherProjectsQuietEarth";
import QuietEarthFloorImages from "./QuietEarthFloorImages";
import QuietEarthGallery from "./QuietEarthGallery";
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
          <Col md={9} className="">
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
                          <td>14.5 Acres</td>
                        </tr>
                        <tr>
                          <th>No. of Units</th>
                          <td>560 Units</td>
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
                      Total Environment In That Quiet Earth sits off Hennur Main
                      Road, in the fast developing North Bangalore area which
                      has not only emerged as an economic hub, but also as a
                      front-runner among self-contained suburbs that are great
                      places to live and work. The presence of good schools,
                      hospitals, malls, hotels and restaurants in the area and
                      easy access to the airport enhances its desirability.
                    </p>
                    <p>
                      In That Quiet Earth - Each home is designed to address the
                      needs of a high-quality contemporary lifestyle with a host
                      of innovative features, and can be customised to suit the
                      functional needs and aesthetic preferences of individual
                      families. Using our proprietary eDesign platform, you can
                      move walls, combine rooms, reconfigure layouts and
                      redesign almost every aspect of your home so that it is
                      just right for you.
                    </p>
                    <p>
                      The two bedroom home is designed around the concept of a
                      traditional Indian courtyard, with the living and dining
                      space and the bedrooms opening out towards a double height
                      garden and deck especially designed to house a full grown
                      small tree. Simple, clean lines and free flowing spaces
                      ensure that the interiors don’t feel dated after some
                      time. An open kitchen allows for conversations, and large
                      windows and French windows bring in plenty of natural
                      light. Earthy natural stone ooring and wood windows
                      provide the warmth that you can always expect from a
                      typical Total Environment home.
                    </p>
                    <p>
                      The 3 bedroom H20 homes are designed with the kitchen,
                      living, dining and master bedroom all opening out onto a
                      double height courtyard garden, especially designed to
                      hold a full grown small tree, bringing nature into the
                      heart of the home.
                    </p>
                    <p>
                      The 3 bedroom H20 homes are designed with the kitchen,
                      living, dining and master bedroom all opening out onto a
                      double height courtyard garden, especially designed to
                      hold a full grown small tree, bringing nature into the
                      heart of the home.
                    </p>
                  </Col>
                </Row>
              </Container>
              <Info />
            </div>

            {/* <div className="py-3 py-md-5 bg-light" id="master-plan">
              <Container fluid className="ps-0 pe-0">
                <Row>
                  <h2 className="text-center py-2">Floor Plans</h2>
                  <Col md={12}>
                    <QuietEarthMasterPlan />
                    </Col>
                </Row>
              </Container>
            </div> */}

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
                  <Col md={3}>
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
                  <Col md={3}>
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
                  <Col md={3}>
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
                  <Col md={3}>
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
          <Col md={3} className="bg-light">
            <Contact />
          </Col>
        </Row>
      </Container>
      <OtherProjectsQuietEarth />

      {/* <FixedIcons /> */}
    </div>
  );
};

export default QuietEarth;

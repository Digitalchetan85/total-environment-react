import React from "react";
import { Col, Container, Row, Table } from "react-bootstrap";
import Contact from "../Includes/Contact";
import Info from "../Includes/Info";
import OtherProjectsRain from "./OtherProjectsRain";
import RainFloorImages from "./RainFloorImages";
import RainGallery from "./RainGallery";
import RainLocation from "./RainLocation";
import RainMasterPlan from "./RainMasterPlan";
import RainPrice from "./RainPrice";
import RainSlider from "./RainSlider";

const Rain = () => {
  return (
    <div>
      <RainSlider />
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
                            PRM/KA/RERA/1251/309/PR/171014/000483
                            <br />
                            PRM/KA/RERA/1251/309/PR/180519/001763
                            <br />
                            PRM/KA/RERA/1251/309/PR/191015/002923
                          </td>
                        </tr>
                        <tr>
                          <th>Location</th>
                          <td>Hosahalli, Yelahanka</td>
                        </tr>
                        <tr>
                          <th>Total Land Area</th>
                          <td>45 Acres</td>
                        </tr>
                        <tr>
                          <th>No. of Units</th>
                          <td>245 Units</td>
                        </tr>
                        <tr>
                          <th>Towers & Blocks</th>
                          <td>14 Rows & Duplex Villas</td>
                        </tr>
                        <tr>
                          <th>Unit Variants</th>
                          <td>4 BHK Villas</td>
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
                    <h2 className="py-3 text-center fs-4">
                      About Total Environment After The Rain
                    </h2>
                    <p>
                      Total Environment is focused on creating physical
                      environments that are in harmony with their surroundings.
                    </p>
                    <p>
                      These handcrafted courtyard homes are set under a blanket
                      of earth. These homes, appear single level on the outside,
                      while being spacious two level homes inside. Our signature
                      earth sheltered villas are not just close to the nature,
                      they are also a part of the ecosystem; and at the same
                      time, they keep the homes cool and pleasant.
                    </p>
                    <p>
                      Total Environment After the Rain Villas are designed to
                      celebrate nature at its best. Welcoming enough light and
                      ventilation, the spaces inside your homes bring in
                      serenity into your daily affairs. The foyer connects to
                      the living, dining, kitchen at lobby/ground level and to
                      two bedrooms at each lower and upper level. Each Villa has
                      a seamless transition from interior to exterior spaces,
                      with timber-lined full-width sliding windows system, that
                      extend onto a wooden deck and garden. The homes
                      romanticize the pleasure of changing seasons; may it be
                      the freshness after rains or the lazy summers and chilling
                      winters or the blossoming spring. The selective use of
                      natural materials provides a warm texture to the whole
                      living experience here. The four bedroom split-level
                      design of these villas has their focal point as a
                      courtyard, whereon all spaces open to.
                    </p>

                    <p>
                      Total Environment After the Rain Villas are designed to
                      celebrate nature at its best. Welcoming enough light and
                      ventilation, the spaces inside your homes bring in
                      serenity into your daily affairs. The foyer connects to
                      living, dining, kitchen at lobby/ground level and to two
                      bedrooms at each lower and upper level. The master bedroom
                      at the upper level has been designed to have a terrace
                      garden which overlooks the pool in the courtyard. The
                      basement of these homes houses the 400 SqFt media /
                      entertainment area. Each Villa has a seamless transition
                      from interior to exterior spaces, with timber-lined
                      full-width sliding windows system, that extend onto a
                      wooden deck and garden. The homes romanticize the pleasure
                      of changing seasons; may it be the freshness after rains
                      or the lazy summers and chilling winters or the blossoming
                      spring. The selective use of natural materials provides a
                      warm texture to the whole living experience here. The four
                      bedroom split-level design of these villas has their focal
                      point as a courtyard, whereon all spaces open to.
                    </p>
                    <p>
                      Total Environment After the Rain Villas are designed to
                      celebrate nature at its best. Welcoming enough light and
                      ventilation, the spaces inside your homes bring in
                      serenity into your daily affairs. The foyer connects to
                      living, dining, kitchen at lobby/ground level and to two
                      bedrooms at each lower and upper level. The master bedroom
                      at the upper level has been designed to have a terrace
                      garden which overlooks the pool in the courtyard. The
                      basement of these homes houses the 400 SqFt media /
                      entertainment area. Each Villa has a seamless transition
                      from interior to exterior spaces, with timber-lined
                      full-width sliding windows system, that extend onto a
                      wooden deck and garden. The homes romanticize the pleasure
                      of changing seasons; may it be the freshness after rains
                      or the lazy summers and chilling winters or the blossoming
                      spring. The selective use of natural materials provides a
                      warm texture to the whole living experience here. The four
                      bedroom split-level design of these villas has their focal
                      point as a courtyard, whereon all spaces open to.
                    </p>
                  </Col>
                </Row>
              </Container>
              <Info />
            </div>

            <div className="py-3 py-md-5 bg-light" id="master-plan">
              <Container fluid className="ps-0 pe-0">
                <Row>
                  <h2 className="text-center py-2"> Floor Plans</h2>
                  <Col md={12}>
                    <RainFloorImages />
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
                  <RainPrice />
                  <Info />
                  {/*<RainGallery /> */}
                  <RainLocation />
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
      <OtherProjectsRain />

      {/* <FixedIcons /> */}
    </div>
  );
};

export default Rain;

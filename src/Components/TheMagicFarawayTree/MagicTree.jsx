import React from "react";
import { Col, Container, Row, Table } from "react-bootstrap";
import Contact from "../Includes/Contact";
import Info from "../Includes/Info";
import MagicTreeFloorImages from "./MagicTreeFloorImages";
import MagicTreeGallery from "./MagicTreeGallery";
import MagicTreeLocation from "./MagicTreeLocation";
import MagicTreeMasterPlan from "./MagicTreeMasterPlan";
import MagicTreePrice from "./MagicTreePrice";
import MagicTreeSlider from "./MagicTreeSlider";
import OtherProjectsMagicTree from "./OtherProjectsMagicTree";

const MagicTree = () => {
  return (
    <div>
      <MagicTreeSlider />
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
                          <td>PRM/KA/RERA/1251/310/PR/171015/000424</td>
                        </tr>
                        <tr>
                          <th>Development Size</th>
                          <td>12 Acres (Approx.)</td>
                        </tr>
                        <tr>
                          <th>No. of Units</th>
                          <td>434 Apartments</td>
                        </tr>
                        <tr>
                          <th>No. of Towers</th>
                          <td>2 Towers (Phase 2)</td>
                        </tr>
                        <tr>
                          <th>Unit Variants</th>
                          <td>3 BHK, 4 BHK & 4 BHK PentHouses</td>
                        </tr>
                        <tr>
                          <th>No. of Floors</th>
                          <td>G + 30 Floors</td>
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
                      About Total Environment The Magic Faraway Tree
                    </h2>
                    <p>
                      Total Environment is focused on creating living spaces
                      that are in harmony with their surroundings.
                      <br />
                      The Magic Faraway Tree on the Kanakapura Main Road is
                      spread over 12 acres. The property will have 434
                      residential apartments. Each home is custom designed and
                      handcrafted to suit individual lifestyles, following the
                      belief that not one size fits all. Every apartment has its
                      own garden and open terrace, allowing ample light and
                      ventilation.
                    </p>
                    <p>
                      The Magic Faraway Tree takes its name from the beautiful
                      old tree on the edge of the property on Kanakapura Road,
                      just 200 meters from the NICE corridor and adjacent to the
                      upcoming Metro Station, well connected with Electronics
                      City, Hosur Road, Bannerghatta Road as well as the
                      Industrial areas of Peenya and Bidadi. The property is
                      elevated, with greenery all around, overlooking small
                      hillocks towards the south.
                    </p>
                    <p>
                      Phase II on the northern side of the property has 2
                      towers, with our C20 single level apartments and D35
                      duplex apartments, all in our very special Orange
                      specifications, which include kitchen cabinetry with
                      dishwasher, hob and chimney, beds, wardrobes and study
                      tables. Each of these homes is also available in our
                      Purple, Blue or Green specifications.
                    </p>
                    <p>
                      The C20 home is designed as a simple “L” in plan, with 4
                      such homes placed back to back, forming a “plus” shape in
                      a block. This unique layout coupled with large glass
                      panels, offers clear unobstructed views of the outside,
                      from every room and at the same time open out onto a
                      landscaped terrace garden placed inside the L. The gardens
                      run in alternate directions on alternate floors, for the
                      required natural light.
                    </p>
                    <p>
                      These exceptional homes have been created for people who
                      share our passion for design and quality. A host of
                      innovative features have been introduced to create spaces
                      that are smart and modern, yet warm and inviting.
                    </p>
                    <p>
                      The D35 duplex homes are the closest you can get to a
                      bungalow on the ground.
                      <br />
                      Designed to wrap around a large garden, deck and
                      waterbody, these homes are intimate and warm yet spacious
                      and cheerful with large glass panels that bring in natural
                      light.
                      <br />
                      The upper level houses the master bedroom suite, complete
                      with a walk-in wardrobe and a spacious bathroom
                      overlooking the garden below. Also housed on this floor,
                      are the children’s bedroom with attached bathroom, as well
                      as a study and a family space which can easily convert
                      into a fourth bedroom through our customisation process.
                    </p>
                    <p>
                      Warm, earthy materials, carefully crafted finishes, little
                      details such as bathroom doors with glass and wood
                      louvres, and the ability to customize every space to suit
                      individual needs, make this a very special home.
                    </p>
                  </Col>
                </Row>
              </Container>
            </div>

            <div className="py-3 py-md-5 bg-light" id="master-plan">
              <Container fluid className="ps-0 pe-0">
                <Row>
                  <Col md={12}>
                    <MagicTreeMasterPlan />
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
                      <li>Board Games</li>
                      <li>Squash Courts</li>
                      <li>Well-equipped Gymnasium</li>
                      <li>Toddlers' Pool Well-equipped</li>
                      <li>Children's Play Area & Central Greens</li>
                    </ul>
                  </Col>
                </Row>
              </Container>
            </div>
            <div className="py-3 py-md-5" id="pricing">
              <Container fluid className="ps-0 pe-0">
                <Row>
                  <MagicTreePrice />
                  <Info />
                  <MagicTreeGallery />
                  <MagicTreeLocation />
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
      <OtherProjectsMagicTree />

      {/* <FixedIcons /> */}
    </div>
  );
};

export default MagicTree;

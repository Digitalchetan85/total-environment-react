import React from "react";
import { Col, Container, Row, Table } from "react-bootstrap";
import Contact from "../Includes/Contact";
import Info from "../Includes/Info";
import OtherProjectsLearningFly from "./OtherProjectsLearningFly";
import LearningFlyLocation from "./LearningFlyLocation";
import LearningFlyGallery from "./LearningFlyGallery";
import LearningFlyPrice from "./LearningFlyPrice";
import LearningFlyMasterPlan from "./LearningFlyMasterPlan";
import LearningFlySlider from "./LearningFlySlider";
import LearningFlyFloorImages from "./LearningFlyFloorImages";

const LearningFly = () => {
  return (
    <div>
      <LearningFlySlider />
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
                          <td>PRM/KA/RERA/1251/310/PR/171014/000270</td>
                        </tr>
                        <tr>
                          <th>Development Size</th>
                          <td>3.7 Acres (Approx.)</td>
                        </tr>
                        <tr>
                          <th>No. of Units</th>
                          <td>202 Apartments</td>
                        </tr>
                        <tr>
                          <th>No. of Towers</th>
                          <td>3 Towers</td>
                        </tr>
                        <tr>
                          <th>No. of Floors</th>
                          <td>G + 20/21 Floors</td>
                        </tr>
                        <tr>
                          <th>Unit Variants</th>
                          <td>3 BHK, 4 BHK & 4 BHK PentHouse</td>
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
                      About Total Environment Learning To Fly
                    </h2>
                    <p>
                      Certain things in life are hard to put into words. They
                      can be understood only through experience. Like the thrill
                      of a road trip, or the spray of ocean air or the view from
                      the mountain top.
                    </p>
                    <p>
                      And so it is with our homes at Learning to Fly located in
                      South Bangalore. Each home is designed with a high degree
                      of sensitivity to detail, using natural materials with
                      beautifully handcrafted finishes. Each home is fitted with
                      a landscaped garden complete with sprinklers and a
                      drip-irrigation system, even on higher floors. Each home
                      is extensively furnished and customized to suit your
                      lifestyle. And all this is combined with the facilities
                      and conveniences of a gated community living – a
                      combination you get only from Total Environment.
                    </p>

                    <p>
                      The C25 home is designed as a simple “L” in plan, with 4
                      such homes placed back to back, forming a “plus” shape in
                      a block. This unique layout coupled with large glass
                      panels, offers clear unobstructed views of the outside,
                      from every room and at the same time opening out onto a
                      landscaped terrace garden placed inside the L. The gardens
                      run in alternate directions on alternate floors, for the
                      required natural light.
                    </p>
                    <p>
                      With a lush picturesque terrace garden, our T35 homes
                      bring you closer to nature. A spacious entrance foyer
                      leads to a large living – dining space opening into the
                      large terrace garden, along with a well segregated dry and
                      wet kitchen. The private spaces of the home – the bedrooms
                      are clubbed together and located away from the main living
                      spaces. The master bedroom has a spacious walk-in closet
                      and a luxurious bathroom which also opens out to the
                      terrace garden.
                    </p>
                    <p>
                      In line with our design philosophy of integrating with
                      nature, all living spaces either open out onto a terrace
                      garden or overlook it. The L-shaped living dining space
                      and open kitchen provides a sense of spaciousness while
                      still being intimately wrapped around the garden.
                    </p>
                    <p>
                      The homes are extensively furnished and fitted out in our
                      select Orange specifications, including kitchen cabinetry
                      with dishwasher, hob and chimney, beds, wardrobes and
                      study tables. Each home is also available in our Purple,
                      Blue or Green specification. Added to this, our
                      sophisticated eDesign platform gives you the flexibility
                      to fully customize every space, with several walling,
                      flooring and layout options to choose from.
                    </p>
                    <p>
                      The sensitively designed living spaces at Learning to Fly
                      combine the benefits of an independent home with the
                      safety and convenience of high quality community living.
                    </p>
                    <p>
                      Words cannot adequately describe the allure of our homes.
                      They cannot fully convey the passion, laborious processes,
                      the exquisite craftsmanship and obsessive detailing that
                      goes into turning these living spaces into homes that are
                      comfortable, warm, inviting and yet safe and private.
                      Visit our Experience Home at Learning to Fly and discover
                      what makes them these homes that extra little bit special.
                    </p>
                  </Col>
                </Row>
              </Container>
            </div>

            <div className="py-3 py-md-5 bg-light" id="master-plan">
              <Container fluid className="ps-0 pe-0">
                <Row>
                  <h2 className="text-center">Floor Plan</h2>
                  <Col md={12}>
                    <LearningFlyFloorImages />
                  </Col>
                </Row>
              </Container>
            </div>

            <div className="py-3 py-md-3" id="amenites">
              <Container fluid className="ps-0 pe-0">
                <Row className="justify-content-center">
                  <h2 className="text-center py-md-3 py-2 fs-3">Amenities</h2>
                  <Col md={8} xs={6} className="align-self-center">
                    <p>
                      <strong>
                        Project Amenities Include A Clubhouse With Gymnasium,
                        Swimming Pool, Indoor Games, Squash Courts, Badminton
                        Courts And Children’s Play Area.
                      </strong>
                    </p>
                  </Col>
                </Row>
              </Container>
            </div>
            <div className="py-3 py-md-5" id="pricing">
              <Container fluid className="ps-0 pe-0">
                <Row>
                  <LearningFlyPrice />
                  <Info />
                  <LearningFlyGallery />
                  <LearningFlyLocation />
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
      <OtherProjectsLearningFly />

      {/* <FixedIcons /> */}
    </div>
  );
};

export default LearningFly;

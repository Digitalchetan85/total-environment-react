import React from "react";
import { Col, Container, Row, Table } from "react-bootstrap";
import Contact from "../Includes/Contact";
import Info from "../Includes/Info";
import OtherProjectsWorkationsYelhanka from "./OtherProjectsWorkationsYelhanka";
import WorkationsSliderYelhanka from "./WorkationsSliderYelhanka";
import WorkationsPriceYelhanka from "./WorkationsPriceYelhanka";
import WorkationsMasterPlanYelhanka from "./WorkationsMasterPlanYelhanka";

const WorkcationsYelhanka = () => {
  return (
    <div>
      <WorkationsSliderYelhanka />
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
                          <td>PRM/KA/RERA/1251/446/PR/200817/003551</td>
                        </tr>
                        <tr>
                          <th>Development Size</th>
                          <td>3.8 Lakh Sq.Ft. Office Space</td>
                        </tr>
                        <tr>
                          <th>No. of Units</th>
                          <td>On Request</td>
                        </tr>
                        <tr>
                          <th>No. of Blocks</th>
                          <td>1 Block</td>
                        </tr>
                        <tr>
                          <th>Unit Variants</th>
                          <td>500 Sq.Ft. Onwards...</td>
                        </tr>
                        <tr>
                          <th>No. of Floors</th>
                          <td>3B + 19 Floors</td>
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
                      About Total Environment Total Environment Workcations -
                      Yelhanka
                    </h2>
                    <p>
                      A traditional office is where you check in at 9, check out
                      at 5, and count the days to weekends and vacations. But it
                      doesn’t have to be that way. At Total Environment, we have
                      designed and delivered living spaces for 24 years, by
                      blurring the boundaries between the indoors and outdoors,
                      making living in our homes feel more like a resort
                      vacation.
                    </p>
                    <p>
                      We apply the same philosophy to our workspaces by
                      embracing nature to bridge the gap between work and
                      vacation.
                    </p>
                    <p>
                      Introducing “WORKCATIONS” by Total Environment. Nature has
                      the innate ability to enhance productivity and well-being.
                      We channel this through good design and bring nature into
                      your professional lives. Enjoying the best of what nature
                      has to offer, does not have to be paused or postponed
                      until you leave office. It’s all available in our
                      thoughtfully designed Workcations.
                    </p>
                    <p>
                      <strong>
                        Connectivity - Pursuit Of A Radical Rhapsody Commercial
                      </strong>
                      <br />
                      Whitefield is in the Eastern periphery of Bangalore, and
                      is well-linked to its far-reaches through a web of
                      highways, expressways, roads and railways.
                    </p>

                    {/* <ul>
                      <li>
                        Two major roads connect Whitefield to downtown
                        Bangalore:
                      </li>
                      <ul>
                        <li> Whitefield road via Mahadevapura</li>
                        <li>
                          Varthur road (HAL Old Airport Road) via Marathahalli
                        </li>
                      </ul>
                      <li>
                        {" "}
                        HAL Airport Road, ITPL Main Road and other national &
                        state highways run along the primeter of the subrub.
                      </li>
                      <li>
                        Bangalore International Airport is at a distance of 50
                        kilometers (about an hour’s drive).
                      </li>
                      <li>
                        Trains between Whitefield and the City Center take about
                        30 to 40 minutes
                      </li>
                      <li>
                        {" "}
                        BMTC offers extensive business services to the area,
                        with over 500 A/C Volvo buses plying daily.
                      </li>
                      <li>
                        The Metro rail line extending up to Whitefield is in its
                        second phase of development.
                      </li>
                    </ul> */}
                    <p>
                      Pursuit of a Radical Rhapsody Commercial is perfectly
                      located on the ITPL Main Road, close to residential
                      communities, schools, shopping centres, cultural hubs,
                      hospitals, restaurants & hotels. Efficient connectivity
                      and a well-developed social infrastructure have led to
                      this area becoming self-sufficient. Good employment
                      opportunities, coupled with a talent pool of highly
                      skilled manpower, has had a positive impact on the
                      residential and commercial real estate markets in
                      Whitefield, thereby making it a brand that many companies
                      want to be part of.
                    </p>
                  </Col>
                </Row>
              </Container>
            </div>

            <div className="py-3 py-md-5 bg-light" id="master-plan">
              <Container fluid className="ps-0 pe-0">
                <Row>
                  <Col md={12}>
                    <WorkationsMasterPlanYelhanka />
                  </Col>
                </Row>
              </Container>
            </div>

            {/* <div className="py-3 py-md-3" id="amenites">
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
            </div> */}
            <div className="py-3 py-md-5" id="pricing">
              <Container fluid className="ps-0 pe-0">
                <Row>
                  <WorkationsPriceYelhanka />
                  <Info />
                  {/* <WorkationsGalleryYelhanka /> */}
                  {/* <WorkationsLocationYelhanka /> */}
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
      <OtherProjectsWorkationsYelhanka />

      {/* <FixedIcons /> */}
    </div>
  );
};

export default WorkcationsYelhanka;

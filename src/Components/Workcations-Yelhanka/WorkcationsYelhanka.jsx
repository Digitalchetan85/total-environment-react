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
                    6 Reasons To Invest In Workcations
                  </h2>
                  <Col md={12}>
                    <span className="bg-danger position-absolute start-50 span-line"></span>
                    <Table className="table table-bordered align-middle">
                      <tbody>
                        <tr>
                          <th>1</th>
                          <td>4.96L Sq.Ft. mixed use development comprising office spaces, retail and F&B.</td>
                        </tr>
                        <tr>
                          <th>2</th>
                          <td>Investment starting as Low as INR 36L* Inclusive of GST.</td>
                        </tr>
                        <tr>
                          <th>3</th>
                          <td>Guaranteed lease at INR 60/sqft.(INR 30,000/month) for 3 years after possession. </td>
                        </tr>
                        <tr>
                          <th>4</th>
                          <td>Lease management by Total Environment for 15 years.</td>
                        </tr>
                        <tr>
                          <th>5</th>
                          <td>Complimentary maintenance for 3 years from July 2025</td>
                        </tr>
                        <tr>
                          <th>6</th>
                          <td>No Premiums and Floor-rise charges.</td>
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
                      doesn’t have to be that way.
                    </p>
                    <p>
                      At Total Environment, we have designed and delivered
                      living spaces for 25 years, by blurring the boundaries
                      between the indoors and outdoors, making living in our
                      homes feel more like a resort vacation.
                    </p>
                    <p>
                      We apply the same philosophy to our workspaces by
                      embracing nature to bridge the gap between work and
                      vacation.
                    </p>
                    <p>
                      <strong>The Total Environment Difference</strong>
                      <br />
                      Since 1996, we are on a mission to design and deliver
                      sensitively-designed living spaces and experiences. At
                      Total Environment, we love creating experiences that touch
                      your senses. Rich, vibrant and intricate experiences that
                      are created with passion, sensitivity and commitment. Our
                      inspiration comes from nature, the arts and crafts, and
                      from the deep rooted cultural heritage of our beautiful
                      planet.
                    </p>
                    <h4>WORKCATIONS - 
Workspaces That Inspire 
</h4>
<p>Workcations’, where boundaries between 
work and vacation fade away. 
Our thoughtfully designed Workcations focus 
on well-being and enhanced productivity 
where nature is your inspiration! </p>

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
              <Info />
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
                  {/* <Info /> */}
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

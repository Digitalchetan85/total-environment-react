import React from "react";
import { Col, Container, Row, Table } from "react-bootstrap";
import Contact from "../Includes/Contact";
import Info from "../Includes/Info";
import OtherProjectsWindmill from "./OtherProjectsWindmill";
import WindmillGallery from "./WindmillGallery";
import WindmillLocation from "./WindmillLocation";
import WindmillMasterPlan from "./WindmillMasterPlan";
import WindmillPrice from "./WindmillPrice";
import WindmillSlider from './WindmillSlider'

const Windmill = () => {
  return (<div>
    <WindmillSlider />
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
                        <td>24 Acres (Approx.)</td>
                      </tr>
                      <tr>
                        <th>No. of Units</th>
                        <td>405 Units</td>
                      </tr>
                      <tr>
                        <th>No. of Towers</th>
                        <td>7 Towers</td>
                      </tr>
                      <tr>
                        <th>No. of Floors</th>
                        <td>G + 19 Floors</td>
                      </tr>
                      <tr>
                        <th>Unit Variants</th>
                        <td>
                        Villas, Duplex Homes & Triplex Homes
                        </td>
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
                    About Total Environment Windmills of Your Mind
                  </h2>
                  <p>Total Environment Windmills of Your Mind is the flagship project built on a 24-acre property located on the edge of a small lake in Whitefield - the IT hub of India’s Silicon Valley, in the vicinity of the best international schools, hospitals, malls and five-star hotels. Whitefield’s urbane culture and lifestyle have made it home to well-travelled professionals. Against the backdrop of Bangalore’s glorious weather, this burgeoning suburb is one of the best investment destinations in India.  </p>
                  <p>The Award winning Duplex Apartments have re-defined the contemporary Indian home and provided a new direction for housing design in high rise buildings. From gardens and wood decks with water bodies, with every room opening out onto them through large sliding glass panels, spacious double height living spaces, open bathrooms, glass decks and cantilevered wooden stairs to temperature controlled interiors, central vaccum system and finely finished furniture that is almost hand crafted - introduce the PURPLE specifications.</p>

                  <p>Windmills Craftworks is a world-class Jazz Theater, Microbrewery and Restaurant, complimented by a rare selection of books. The finest Craft Beer, freshly brewed right here to exacting specifications. A Theatre for up, close and personal music performances by global talent. A treasure trove of handpicked books on Art, Design, Architecture and Music. A culinary experience with the best inventive and traditional recipes.</p>
                  <p>Set on a verdant expanse of greenery, Windmills of Your Mind comprises simplex, duplex, triplex apartments and villas of the highest aesthetic and construction standards. The property encompasses a total of 1.75 million SqFt of residential space including seven 19 storey buildings and villas, offering C20, D60 apartments and V40 villas.</p>
                </Col>
              </Row>
            </Container>
          </div>

          <div className="py-3 py-md-5 bg-light" id="master-plan">
            <Container fluid className="ps-0 pe-0">
              <Row>
                <Col md={12}>
                  <WindmillMasterPlan />
                </Col>
              </Row>
            </Container>
          </div>

          <div className="py-3 py-md-3" id="amenites">
            <Container fluid className="ps-0 pe-0">
              <Row className="justify-content-center">
                <h2 className="text-center py-md-3 py-2 fs-3">Amenities</h2>
                <Col md={3} xs={6} className="align-self-center">
                  <ul>
                    <li>Swimming Pool</li>
                    <li>Heated Pool</li>
                    <li>Gymnasium</li>
                    <li>Billiards / Snooker</li>
                    <li>Table Tennis</li>
                    <li>Tennis Courts</li>
                  </ul>
                </Col>
                <Col md={3} xs={6}>
                  <ul>
                    <li>Central Greens</li>
                    <li>Theatre</li>
                    <li>Cafeteria</li>
                    <li>Guest Suites</li>
                    <li>Library</li>
                    <li>Squash Courts</li>
                  </ul>
                </Col>
                <Col md={3} xs={6}>
                  <ul>
                  
                  <li>Badminton Courts</li>
                    <li>Tennis Courts</li>
                    <li>Basketball Court</li>
                  <li>Board Games </li>
                    <li>Golf Simulator</li>
                    <li>Children’s Play Area</li>
                  </ul>
                </Col>
              </Row>
            </Container>
          </div>
          <div className="py-3 py-md-5" id="pricing">
            <Container fluid className="ps-0 pe-0">
              <Row>
                <WindmillPrice />
                <Info />
                <WindmillGallery />
                <WindmillLocation />
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
    <OtherProjectsWindmill/>

    {/* <FixedIcons /> */}
  </div>
  )
}

export default Windmill
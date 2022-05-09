import React, { useState } from 'react'
import { Button, Col, Container, Row, Table } from 'react-bootstrap';
import QuietEarthModal from './QuietEarthModal';

const QuietEarthPrice = () => {

    
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="bg-light">
        <Container fluid className="ps-0 pe-0">
        <Row className="justify-content-center">
        <Col md={10} xs={12}>
          <div className="">
            <h2 className="text-center py-3 fs-3">Pricing</h2>
            <Table
              responsive="sm"
              className="align-middle text-center border-transparent"
              striped
              bordered
              hover
            >
              <thead>
                <tr>
                  <th>BHK</th>
                  <th>Area (Sq.ft)</th>
                  <th>Price</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>2 BHK (U10) </td>
                  <td>1431</td>
                  <td>1.33 Cr Onwards</td>
                  <td>
                    <Button
                      variant="dark"
                      size="sm"
                      onClick={handleShow}
                      className="my-3 custom-button"
                    >
                      <i className="fa fa-spinner fa-flip fa-download"></i> Price Sheet
                    </Button>
                  </td>
                </tr>
                <tr>
                  <td>3 BHK (H20)</td>
                  <td>2305 - 2409  </td>
                  <td>2.25 Cr Onwards</td>
                  <td>
                    <Button
                      variant="dark"
                      size="sm"
                      onClick={handleShow}
                      className="my-3 custom-button"
                    >
                      <i className="fa fa-spinner fa-flip fa-download"></i> Price Sheet
                    </Button>
                  </td>
                </tr>
                <tr>
                  <td>4 BHK (U20) </td>
                  <td>2890  </td>
                  <td>2.85Cr Onwards</td>
                  <td>
                    <Button
                      variant="dark"
                      size="sm"
                      onClick={handleShow}
                      className="my-3 custom-button"
                    >
                      <i className="fa fa-spinner fa-flip fa-download"></i> Price Sheet
                    </Button>
                  </td>
                </tr>
                <tr>
                  <td>3 BHK Villa (V35) </td>
                  <td>3430   </td>
                  <td>4.56Cr Onwards</td>
                  <td>
                    <Button
                      variant="dark"
                      size="sm"
                      onClick={handleShow}
                      className="my-3 custom-button"
                    >
                      <i className="fa fa-spinner fa-flip fa-download"></i> Price Sheet
                    </Button>
                  </td>
                </tr>
              </tbody>
            </Table>
          </div>
        </Col>
      </Row>

        </Container>
     
      <QuietEarthModal
        show={show}
        handleClose={handleClose}
        title="Download Pricesheet"
        projectid="57a99891-ec20-472a-b230-187e20fee71f"
      />
    </div>
  )
}

export default QuietEarthPrice
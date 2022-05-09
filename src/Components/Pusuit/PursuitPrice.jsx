import React, { useState } from 'react'
import { Button, Col, Container, Row, Table } from 'react-bootstrap';
import PursuitModal from './PursuitModal';

const PursuitPrice = () => {

    
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
                  <td>3 BHK (C20 / L30) </td>
                  <td>2753 - 4100 </td>
                  <td>2.99 Cr Onwards</td>
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
                  <td>4 BHK (L45)</td>
                  <td>5679 </td>
                  <td>6.7 Cr Onwards</td>
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
                  <td>4 BHK Villa (V50) </td>
                  <td>5129 </td>
                  <td>8 Cr Onwards</td>
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
     
      <PursuitModal
        show={show}
        handleClose={handleClose}
        title="Download Pricesheet"
        projectid="57a99891-ec20-472a-b230-187e20fee71f"
      />
    </div>
  )
}

export default PursuitPrice
import React, { useState } from 'react'
import { Button, Col, Container, Row, Table } from 'react-bootstrap';
import WorkationsModalYelhanka from './WorkationsModalYelhanka';
import WorkationsModal from './WorkationsModalYelhanka';
import MagicTreeModal from './WorkationsModalYelhanka';
import PursuitModal from './WorkationsModalYelhanka';

const WorkationsPriceYelhanka = () => {

    
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
                  <td>Commercial Space </td>
                  <td>500 Sq.Ft. Onwards...</td>
                  <td>58.8 Lakh Onwards</td>
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
     
      <WorkationsModalYelhanka
        show={show}
        handleClose={handleClose}
        title="Download Pricesheet"
        projectid="57a99891-ec20-472a-b230-187e20fee71f"
      />
    </div>
  )
}

export default WorkationsPriceYelhanka
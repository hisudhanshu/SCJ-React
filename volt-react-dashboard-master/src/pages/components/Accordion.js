import React from 'react';
import { Row, Col, Container, Modal, Button, Table, Card } from '@themesberg/react-bootstrap';

const RawMaterialPage = () => (
  
  <article>
    <Container className="px-0">
      <Row className="d-flex flex-wrap flex-md-nowrap align-items-center py-4">
        <Col className="d-block mb-4 mb-md-0">
          <h3 className="h3">
            <strong style={{ fontFamily: 'fGeorgia Times New Roman Times, serif'}}>Create Raw Material</strong>
          </h3>
        </Col>
      </Row>

      <Card border="light" className="shadow-sm mb-4">
        <Card.Body>
          <Row style={{ fontFamily: "Georgia, 'Times New Roman', Times, serif" }}>
            <Col lg={12}>
              <Row>
                <Col md={4} style={{ marginTop: '30px' }}>
                  <label htmlFor="name">Add Material</label>
                  <input type="text" className="form-control" placeholder="Enter Material" id="name" />
                </Col>
                <Col md={4} style={{ marginTop: '30px' }}>
                  <label htmlFor="nametype">Add Material Type</label>
                  <input type="text" className="form-control" placeholder="Enter Material" id="nametype" />
                </Col>
                <Col md={4} style={{ marginTop: '30px' }}>
                  <label htmlFor="namecode">Add Material Code</label>
                  <input type="number" className="form-control" placeholder="Enter Material Code" id="namecode" />
                </Col>
                <Col md={4} style={{ marginTop: '30px' }}>
                  <label htmlFor="namecost">Add Cost per/unit</label>
                  <input type="number" className="form-control" placeholder="Enter Material Cost" id="namecost" />
                </Col>
                <Col md={4} style={{ marginTop: '30px' }}>
                  <label htmlFor="namevendor">Add Vendor</label>
                  <input type="text" className="form-control" placeholder="Enter Vendor" id="namevendor" />
                </Col>
                <Col md={4} style={{ marginTop: '30px' }}>
                  <label htmlFor="namelevel">Stock</label>
                  <input type="text" className="form-control" placeholder="Enter Inventory Level" id="namelevel" />
                </Col>
              </Row>
            </Col>
          </Row>
        </Card.Body>
        <br></br><br></br>
        <Card.Footer className="text-end">
          <Button className="btn btn-primary" style={{ paddingInline: '30px' }}>
            Add
          </Button>
        </Card.Footer>
        <br></br>
      </Card>
    </Container>

    <Modal as="div" centered show={false} id="exampleModalToggle" aria-labelledby="exampleModalToggleLabel">
      <Modal.Header>
        <Modal.Title id="exampleModalToggleLabel">Modal Title</Modal.Title>
        <Button variant="secondary" data-bs-dismiss="modal" aria-label="Close"></Button>
      </Modal.Header>
    </Modal>
  </article>
);

export default RawMaterialPage;

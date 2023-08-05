
import React from 'react';
import { Row, Col, Container, Modal, Button, Card } from '@themesberg/react-bootstrap';

export default () => {
  return (
    <article>
        <Container className="px-0">
        <Row className="d-flex flex-wrap flex-md-nowrap align-items-center py-4">
          <Col className="d-block mb-4 mb-md-0">
            <h3 className="h3">
              <strong style={{ fontFamily: 'Georgia, Times New Roman, Times, serif' }}>Create Recipe</strong>
            </h3>
          </Col>
        </Row>

        <Card border="light" className="shadow-sm mb-4">
          <Card.Body>
            <Row style={{ fontFamily: "Georgia, 'Times New Roman', Times, serif" }}>
              <Col lg={12}>
                <Row>
                  <Col md={4} style={{ marginTop: '30px' }}>
                    <label htmlFor="Category">Product Category</label>
                    <select className="form-control" id="Category">
                      <option value="select">--Select--</option>
                      <option value="category1">Category 1</option>
                      <option value="category2">Category 2</option>
                      <option value="category3">Category 3</option>
                    </select>
                  </Col>
                  <Col md={4} style={{ marginTop: '30px' }}>
                    <label htmlFor="Brand">Product Brand</label>
                    <select className="form-control" id="Brand">
                    <option value="select">--Select--</option>
                      <option value="brand1">Brand 1</option>
                      <option value="brand2">Brand 2</option>
                      <option value="brand3">Brand 3</option>
                    </select>
                  </Col>
                  <Col md={4} style={{ marginTop: '30px' }}>
                    <label htmlFor="product">Product Name</label>
                    <select className="form-control" id="product">
                    <option value="select">--Select--</option>
                      <option value="product1">Product 1</option>
                      <option value="product2">Product 2</option>
                      <option value="product3">Product 3</option>
                    </select>
                  </Col>
                  <Col md={4} style={{ marginTop: '30px' }}>
                    <label htmlFor="customer">Customer Name</label>
                    <select className="form-control" id="customer">
                    <option value="select">--Select--</option>
                      <option value="customer1">Customer 1</option>
                      <option value="customer2">Customer 2</option>
                      <option value="customer3">Customer 3</option>
                    </select>
                  </Col>
                  <Col md={4} style={{ marginTop: '30px' }}>
                    <label htmlFor="clientType">Client Type</label>
                    <select className="form-control" id="clientType">
                    <option value="select">--Select--</option>
                      <option value="type1">Type 1</option>
                      <option value="type2">Type 2</option>
                      <option value="type3">Type 3</option>
                    </select>
                  </Col>
                  <Col md={4} style={{ marginTop: '30px' }}>
                    <label htmlFor="selectmaterial">Select Material</label>
                    <select className="form-control" id="selectmaterial">
                    <option value="select">--Select--</option>
                      <option value="material1">Material 1</option>
                      <option value="material2">Material 2</option>
                      <option value="material3">Material 3</option>
                    </select>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Card.Body>
          <br /><br />
          <Card.Footer className="text-end">
            {/* <Button className="btn btn-primary" style={{ paddingInline: '30px' }}>
              Add
            </Button> */}
            <Button variant="tertiary" className="m-1">Submit</Button>
          </Card.Footer>
          <br />
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
};

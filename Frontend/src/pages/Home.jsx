import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

function Home() {
  return (
    <Container className="mt-4">

      {/* Hero Section */}
      <div className="p-4 mb-4 bg-light rounded text-center shadow">
        <h1 className="fw-bold text-primary">Smart Complaint System</h1>
        <p className="text-muted">
          Register your complaints and track status easily 🚀
        </p>
        <Button variant="success" className="me-2">Raise Complaint</Button>
        <Button variant="primary" onClick={() => navigate("/CheckStatus")}>
                        Check Status
                      </Button>
      </div>

      {/* Stats Section */}
      <Row className="text-center mb-4">
        <Col md={4}>
          <Card className="shadow p-3">
            <h4 className="text-success">120+</h4>
            <p>Total Complaints</p>
          </Card>
        </Col>

        <Col md={4}>
          <Card className="shadow p-3">
            <h4 className="text-warning">45</h4>
            <p>Pending</p>
          </Card>
        </Col>

        <Col md={4}>
          <Card className="shadow p-3">
            <h4 className="text-primary">75</h4>
            <p>Resolved</p>
          </Card>
        </Col>
      </Row>

      {/* Cards Row */}
      <Row className="mt-4">

        <Col md={3}>
          <Card className="shadow">
            <Card.Img variant="top" src="bio.png" />
            <Card.Body>
              <Card.Title>Garbage Issue</Card.Title>
              <Card.Text>Report waste & sanitation problems</Card.Text>
              <Button variant="primary">Report</Button>
            </Card.Body>
          </Card>
        </Col>

        <Col md={3}>
          <Card className="shadow">
            <Card.Img variant="top" src="climate.png" />
            <Card.Body>
              <Card.Title>Water Issue</Card.Title>
              <Card.Text>Report water supply problems</Card.Text>
              <Button variant="primary">Report</Button>
            </Card.Body>
          </Card>
        </Col>

        <Col md={3}>
          <Card className="shadow">
            <Card.Img variant="top" src="bio.png" />
            <Card.Body>
              <Card.Title>Electricity</Card.Title>
              <Card.Text>Report power related issues</Card.Text>
              <Button variant="primary">Report</Button>
            </Card.Body>
          </Card>
        </Col>

        <Col md={3}>
          <Card className="shadow">
            <Card.Img variant="top" src="climate.png" />
            <Card.Body>
              <Card.Title>Road Damage</Card.Title>
              <Card.Text>Report potholes & road damage</Card.Text>
              <Button variant="primary">Report</Button>
            </Card.Body>
          </Card>
        </Col>

      </Row>

      {/* Extra Section */}
      <Row className="mt-5">
        <Col>
          <Card className="shadow p-4 text-center">
            <h4 className="fw-bold">Why Use This System?</h4>
            <p className="text-muted">
              Fast complaint resolution, real-time tracking, and transparency between citizens and authorities.
            </p>
          </Card>
        </Col>
      </Row>

    </Container>
  );
}

export default Home;
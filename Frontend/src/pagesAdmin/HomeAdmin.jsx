import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function HomeAdmin() {

  const navigate = useNavigate();

  return (
    <Container className="mt-4">

      {/* Header */}
      <div className="p-4 mb-4 bg-dark text-white rounded shadow">
        <h2 className="fw-bold">Admin Dashboard</h2>
        <p>Manage all complaints and system activities</p>
      </div>

      {/* Stats */}
      <Row className="text-center mb-4">

        <Col md={3}>
          <Card className="shadow p-3">
            <h4 className="text-primary">150</h4>
            <p>Total Complaints</p>
          </Card>
        </Col>

        <Col md={3}>
          <Card className="shadow p-3">
            <h4 className="text-warning">60</h4>
            <p>Pending</p>
          </Card>
        </Col>

        <Col md={3}>
          <Card className="shadow p-3">
            <h4 className="text-success">90</h4>
            <p>Resolved</p>
          </Card>
        </Col>

        <Col md={3}>
          <Card className="shadow p-3">
            <h4 className="text-danger">10</h4>
            <p>Urgent</p>
          </Card>
        </Col>

      </Row>

      {/* Actions */}
      <Row className="mt-4">

        <Col md={4}>
          <Card className="shadow text-center p-3">
            <Card.Body>
              <Card.Title>📋 Check Complaints</Card.Title>
              <Card.Text>View all user complaints</Card.Text>
              <Button variant="primary" onClick={() => navigate("/CheckComplaint")}>
                Go
              </Button>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4}>
          <Card className="shadow text-center p-3">
            <Card.Body>
              <Card.Title>⚙️ Take Action</Card.Title>
              <Card.Text>Assign worker & update status</Card.Text>
              <Button variant="warning" onClick={() => navigate("/Actioncomplaint")}>
                Go
              </Button>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4}>
          <Card className="shadow text-center p-3">
            <Card.Body>
              <Card.Title>📊 View Status</Card.Title>
              <Card.Text>Track complaint progress</Card.Text>
              <Button variant="success" onClick={() => navigate("/ViewStatus")}>
                Go
              </Button>
            </Card.Body>
          </Card>
        </Col>

      </Row>

      {/* Extra Section */}
      <Row className="mt-5">
        <Col>
          <Card className="shadow p-4 text-center">
            <h4 className="fw-bold">System Control</h4>
            <p className="text-muted">
              As an admin, you can monitor complaints, assign tasks, and ensure smooth resolution.
            </p>
          </Card>
        </Col>
      </Row>

    </Container>
  );
}

export default HomeAdmin;
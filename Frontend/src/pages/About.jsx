import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

function About() {
  return (
    <Container className="mt-4">
      
      {/* Heading */}
      <Row className="mb-4 text-center">
        <Col>
          <h1 className="fw-bold text-primary">About Smart Complaint System</h1>
          <p className="text-muted">
            A platform to manage and resolve city complaints efficiently.
          </p>
        </Col>
      </Row>

      {/* Project Info */}
      <Row className="mb-4">
        <Col md={6}>
          <Card className="shadow p-3">
            <Card.Body>
              <Card.Title className="fw-bold">📌 Project Overview</Card.Title>
              <Card.Text>
                Smart Complaint System is designed to help citizens register their complaints
                easily and track their status in real-time. It connects users with the admin
                team for faster resolution.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col md={6}>
          <Card className="shadow p-3">
            <Card.Body>
              <Card.Title className="fw-bold">🎯 Objective</Card.Title>
              <Card.Text>
                The main goal is to make complaint handling transparent, efficient, and user-friendly
                using modern web technologies.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Features */}
      <Row className="mb-4">
        <Col>
          <Card className="shadow p-3">
            <Card.Body>
              <Card.Title className="fw-bold text-center">🚀 Features</Card.Title>
              <ul>
                <li>User can register complaints</li>
                <li>Track complaint status</li>
                <li>Admin can assign workers</li>
                <li>Real-time updates</li>
                <li>Simple and clean UI</li>
              </ul>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Team / Developer */}
      <Row className="mb-4">
        <Col md={12}>
          <Card className="shadow p-3 text-center">
            <Card.Body>
              <Card.Title className="fw-bold">👨‍💻 Developer</Card.Title>
              <Card.Text>
                Developed by <strong>Saurabh Kokare</strong> <br />
                Final Year IT Student <br />
                Passionate about Web Development & Problem Solving
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

    </Container>
  );
}

export default About;
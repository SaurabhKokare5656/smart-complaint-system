import { useState } from "react";
import axios from "axios";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";

function Contact(){

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:3000/contact", formData);
      alert("Message Sent ✅");

      setFormData({
        name: "",
        email: "",
        message: ""
      });

    } catch (err) {
      console.log(err);
      alert("Error ❌");
    }
  };

  return (
    <Container className="mt-5">

      {/* Title */}
      <h1 className="text-center text-primary mb-2">Contact Us</h1>
      <p className="text-center text-muted mb-4">
        Have any issues? Reach out to us
      </p>

      <Row className="justify-content-center">

        {/* LEFT FORM */}
        <Col md={5}>
          <Card className="p-4 shadow-sm">
            <h4 className="mb-3">Send Message</h4>

            <Form onSubmit={handleSubmit}>

              <Form.Group className="mb-3">
                <Form.Label>Name</Form.Label>
                <Form.Control 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control 
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Message</Form.Label>
                <Form.Control 
                  as="textarea"
                  rows={4}
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your message..."
                  required
                />
              </Form.Group>

              <Button type="submit" variant="primary" className="w-100">
                Send Message
              </Button>

            </Form>
          </Card>
        </Col>

        {/* RIGHT INFO */}
        <Col md={5}>
          <Card className="p-4 shadow-sm">
            <h4 className="mb-3">Contact Info</h4>

            <p><b>📍 Address:</b> Pune, Maharashtra</p>
            <p><b>📞 Phone:</b> +91 9876543210</p>
            <p><b>📧 Email:</b> support@complaints.com</p>

            <hr/>

            <h5>Working Hours</h5>
            <p>Mon - Fri: 9:00 AM - 6:00 PM</p>
            <p>Saturday: 10:00 AM - 4:00 PM</p>
            <p>Sunday: Closed</p>

          </Card>
        </Col>

      </Row>

    </Container>
  );
}

export default Contact;
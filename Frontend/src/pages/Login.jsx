import React, { useState } from 'react';
import { Container, Card, Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [mobile, setMobile] = useState('');
  const [role, setRole] = useState('user');

  const navigate = useNavigate();

  // Dummy data (tu nantar DB la connect karu shakto)
  const userMobile = "9156692200";
  const adminMobile = "9659515656";

  const handleLogin = () => {
    if (role === "user" && mobile === userMobile) {
      navigate("/Home");
    } else if (role === "admin" && mobile === adminMobile) {
      navigate("/HomeAdmin");
    } else {
      alert("Invalid Mobile Number or Role");
    }
  };

  return (
    <Container className="d-flex justify-content-center align-items-center vh-100">

      <Card style={{ width: "400px" }} className="p-4 shadow">
        <h3 className="text-center mb-3">Login</h3>

        <Form>
          {/* Role Select */}
          <Form.Group className="mb-3">
            <Form.Label>Select Role</Form.Label>
            <Form.Select value={role} onChange={(e) => setRole(e.target.value)}>
              <option value="user">User</option>
              <option value="admin">Admin</option>
            </Form.Select>
          </Form.Group>

          {/* Mobile Input */}
          <Form.Group className="mb-3">
            <Form.Label>Mobile Number</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter mobile number"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
            />
          </Form.Group>

          {/* Button */}
          <Button variant="primary" className="w-100" onClick={handleLogin}>
            Login
          </Button>
        </Form>

      </Card>

    </Container>
  );
}

export default Login;
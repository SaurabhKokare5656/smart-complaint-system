import React, { useState } from 'react';
import { Container, Card, Form, Button } from 'react-bootstrap';
import axios from 'axios';

function Actioncomplaint() {

  const [formData, setFormData] = useState({
    complaint_id: "",
    complaint_type: "",
    username: "",
    action_taken: "",
    assigned_worker: "",
    status: ""
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
      await axios.post("http://localhost:3000/addAction", formData);
      alert("Action Added Successfully ✅");

      setFormData({
        complaint_id: "",
        complaint_type: "",
        username: "",
        action_taken: "",
        assigned_worker: "",
        status: ""
      });

    } catch (err) {
      console.log(err);
      alert("Error ❌");
    }
  };

  return (
    <Container className="mt-4 d-flex justify-content-center">

      <Card style={{ width: "500px" }} className="p-4 shadow">
        <h3 className="text-center mb-3">Admin Action</h3>

        <Form onSubmit={handleSubmit}>

          <Form.Group className="mb-3">
            <Form.Label>Complaint ID</Form.Label>
            <Form.Control name="complaint_id" value={formData.complaint_id} onChange={handleChange}/>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Complaint Type</Form.Label>
            <Form.Control name="complaint_type" value={formData.complaint_type} onChange={handleChange}/>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Username</Form.Label>
            <Form.Control name="username" value={formData.username} onChange={handleChange}/>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Action Taken</Form.Label>
            <Form.Control name="action_taken" value={formData.action_taken} onChange={handleChange}/>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Assign Worker</Form.Label>
            <Form.Control name="assigned_worker" value={formData.assigned_worker} onChange={handleChange}/>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Status</Form.Label>
            <Form.Select name="status" value={formData.status} onChange={handleChange}>
              <option value="">Select</option>
              <option>pending</option>
              <option>in-progress</option>
              <option>resolved</option>
            </Form.Select>
          </Form.Group>

          <Button type="submit" className="w-100">
            Submit Action
          </Button>

        </Form>
      </Card>

    </Container>
  );
}

export default Actioncomplaint;
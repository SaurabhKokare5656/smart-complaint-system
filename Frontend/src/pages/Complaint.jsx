import React, { useState } from 'react';
import { Container, Card, Form, Button } from 'react-bootstrap';
import axios from 'axios';

function Complaint() {

  const [formData, setFormData] = useState({
    id: "",
    username: "",
    mob: "",
    email: "",
    complaint_type: "",
    description: "",
    location: ""
  });

  const [editMode, setEditMode] = useState(false);

  // input change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // 🔍 FETCH DATA BY ID
  const fetchData = async () => {
    try {
      const res = await axios.get("http://localhost:3000/users");
      const found = res.data.users.find(
        (item) => item.complaint_id == formData.id
      );

      if(found){
        setFormData({
          ...found,
          id: found.complaint_id
        });
        setEditMode(true);
      } else {
        alert("No Data Found ❌");
      }

    } catch (err) {
      console.log(err);
    }
  };

  // ✅ SUBMIT / UPDATE
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {

      if(editMode){
        // UPDATE
        await axios.put("http://localhost:3000/updtUsers", {
          ...formData,
          id: formData.id
        });
        alert("Updated Successfully ✅");

      } else {
        // INSERT
        await axios.post("http://localhost:3000/AddUsers", formData);
        alert("Complaint Submitted ✅");
      }

      // reset
      setFormData({
        id:"",
        username: "",
        mob: "",
        email: "",
        complaint_type: "",
        description: "",
        location: ""
      });
      setEditMode(false);

    } catch (err) {
      console.log(err);
      alert("Error ❌");
    }
  };

  return (
    <Container className="mt-4 d-flex justify-content-center">

      <Card style={{ width: "500px" }} className="p-4 shadow">

        <h3 className="text-center mb-3">
          {editMode ? "Edit Complaint" : "Register Complaint"}
        </h3>

        {/* 🔍 ID SEARCH */}
        <Form.Group className="mb-3">
          <Form.Label>Enter Complaint ID (for Edit)</Form.Label>
          <div className="d-flex">
            <Form.Control 
              name="id" 
              value={formData.id} 
              onChange={handleChange}
              placeholder="Enter ID"
            />
            <Button variant="secondary" onClick={fetchData} className="ms-2">
              Fetch
            </Button>
          </div>
        </Form.Group>

        <Form onSubmit={handleSubmit}>

          <Form.Group className="mb-3">
            <Form.Label>Name</Form.Label>
            <Form.Control name="username" value={formData.username} onChange={handleChange} />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Mobile</Form.Label>
            <Form.Control name="mob" value={formData.mob} onChange={handleChange} />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control name="email" value={formData.email} onChange={handleChange} />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Complaint Type</Form.Label>
            <Form.Select name="complaint_type" value={formData.complaint_type} onChange={handleChange}>
              <option value="">Select</option>
              <option>Water</option>
              <option>Garbage</option>
              <option>Road</option>
              <option>Electricity</option>
            </Form.Select>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Description</Form.Label>
            <Form.Control 
              as="textarea" 
              rows={3}
              name="description"
              value={formData.description}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Location</Form.Label>
            <Form.Control name="location" value={formData.location} onChange={handleChange} />
          </Form.Group>

          <Button type="submit" className="w-100">
            {editMode ? "Update Complaint" : "Submit Complaint"}
          </Button>

        </Form>

      </Card>

    </Container>
  );
}

export default Complaint;
import { useEffect, useState } from "react";
import axios from "axios";
import { Table, Button } from "react-bootstrap";

export default function ContactMessages(){

  const [data, setData] = useState([]);

  useEffect(()=>{
    loadData();
  }, []);

  const loadData = () => {
    axios.get("http://localhost:3000/contactMessages")
    .then(res => {
      setData(res.data.data);
    })
    .catch(err => console.log(err));
  };

  return(
    <>

    <h2>Contact Messages</h2>
    <Button onClick={loadData}>Refresh</Button>

    <Table striped bordered hover className="mt-3">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
          <th>Message</th>
        </tr>
      </thead>

      <tbody>
        {data.map((item, index)=>(
          <tr key={index}>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.email}</td>
            <td>{item.message}</td>
          </tr>
        ))}
      </tbody>
    </Table>

    </>
  );
}
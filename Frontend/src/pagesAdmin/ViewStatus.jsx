import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { useEffect, useState } from 'react';

export default function ViewStatus(){

    const [ttl, setNm] = useState(0);
    const [data, setDt] = useState([]);

    useEffect(()=>{
        loadData();
    }, []);

    // 🔥 Load Data
    const loadData = () => {
        axios.get('http://localhost:3000/adminStatus')
        .then(res => {
            console.log(res.data);

            setNm(res.data.data.length);
            setDt(res.data.data);
        })
        .catch(err => {
            console.log(err);
        });
    }

    // 🔥 DELETE FUNCTION
    const deleteData = async (id) => {

        const confirmDelete = window.confirm("Are you sure to delete?");
        if(!confirmDelete) return;

        try {
            await axios.delete(`http://localhost:3000/deleteUser/${id}`);
            alert("Deleted Successfully ✅");

            loadData(); // refresh table

        } catch (err) {
            console.log(err);
            alert("Delete Failed ❌");
        }
    };

    return(
        <>  

        <h1>Admin View Status ({ttl})</h1>

        <Button variant="primary" onClick={loadData}>
            Refresh
        </Button>

        <table className="table table-bordered table-striped mt-3">
            <thead className="table-dark">
                <tr>
                    <th>ID</th>
                    <th>Username</th>
                    <th>Mobile</th>
                    <th>Email</th>
                    <th>Type</th>
                    <th>Description</th>
                    <th>Location</th>
                    <th>Action</th>
                    <th>Worker</th>
                    <th>Status</th>
                    <th>Delete</th>
                </tr>
            </thead>

            <tbody>
                {data.map((item, index) => (
                    <tr key={index}>
                        <td>{item.complaint_id}</td>
                        <td>{item.username}</td>
                        <td>{item.mob}</td>
                        <td>{item.email}</td>
                        <td>{item.complaint_type}</td>
                        <td>{item.description}</td>
                        <td>{item.location}</td>

                        <td>{item.action_taken || "Pending"}</td>
                        <td>{item.assigned_worker || "-"}</td>

                        <td>
                          {item.status === "resolved" ? "✅ Resolved" :
                           item.status === "in-progress" ? "🟡 In Progress" :
                           "🔴 Pending"}
                        </td>

                        <td>
                            <Button 
                              variant="danger" 
                              size="sm"
                              onClick={() => deleteData(item.complaint_id)}
                            >
                              🗑️
                            </Button>
                        </td>

                    </tr>
                ))}
            </tbody>
        </table>

        </>
    )
}
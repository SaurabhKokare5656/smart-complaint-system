import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { useEffect, useState } from 'react';

export default function CheckStatus(){

    const [ttl, setNm] = useState(0);
    const [data, setDt] = useState([]);

    useEffect(()=>{
        loadData();
    }, []);

    const loadData = () => {
        axios.get('http://localhost:3000/checkStatus')
        .then(res => {
            console.log(res.data);

            setNm(res.data.data.length);
            setDt(res.data.data);
        })
        .catch(err => {
            console.log(err);
        });
    }

    return(
        <>  

        <h1>Check Status {ttl}</h1>

        <Button variant="success" onClick={loadData}>Refresh</Button>

        <table className="table table-dark mt-3">
            <thead>
                <tr>
                    <th>complaint_id</th>
                    <th>username</th>
                    <th>complaint_type</th>
                    <th>location</th>
                    <th>action_taken</th>
                    <th>assigned_worker</th>
                    <th>status</th>
                </tr>
            </thead>

            <tbody>
                {data.map((item, index) => (
                    <tr key={index}>
                        <td>{item.complaint_id}</td> 
                        <td>{item.username}</td>
                        <td>{item.complaint_type}</td>
                        <td>{item.location}</td>

                        <td>{item.action_taken || "Pending"}</td>
                        <td>{item.assigned_worker || "-"}</td>
                        <td>
                          {item.status ? item.status : "Not Started"}
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>

        </>
    )
}
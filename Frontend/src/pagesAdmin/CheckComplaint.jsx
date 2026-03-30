import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { useEffect, useState } from 'react';

export default function CheckComplaint(){

    const [ttl, setNm] = useState(0);
    const [data, setDt] = useState([]);

    useEffect(()=>{
        covid();
    }, []);

    const covid = () => {
        axios.get('http://localhost:3000/users')
        .then(res => {
            console.log(res.data);

            setNm(res.data.users.length);   // total count
            setDt(res.data.users);          // array set ✔
        })
        .catch(err => {
            console.log(err);
        });
    }

    return(
        <>  

        <h1>Check Complaint {ttl}</h1>

        <Button variant="success" onClick={covid}>Refresh</Button>

        <table className="table table-dark mt-3">
            <thead>
                <tr>
                    <th>complaint_id</th>
                    <th>username</th>
                    <th>mob</th>
                    <th>email</th>
                    <th>complaint_type</th>
                    <th>description</th>
                    <th>location</th>
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
                    </tr>
                ))}
            </tbody>
        </table>

        </>
    )
}
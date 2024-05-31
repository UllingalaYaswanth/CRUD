import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

function UpdateEmployee() {
    const [Name, setName] = useState('');
    const [Age, setAge] = useState('');
    const [Dept, setDept] = useState('');
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        // Fetch the existing details of the employee
        axios.get(`http://localhost:3000/employee/${id}`)
            .then(res => {
                const { Name, Age, Dept } = res.data;
                setName(Name);
                setAge(Age);
                setDept(Dept);
            })
            .catch(err => console.error("Error fetching employee data:", err));
    }, [id]);

    function handleSubmit(event) {
        event.preventDefault();
        
        // Basic input validation
        if (!Name || !Age || !Dept) {
            alert("Please fill in all fields.");
            return;
        }

        // Update the employee details
        axios.put(`http://localhost:3000/employee/${id}`, { Name, Age, Dept })
            .then(res => {
                console.log("Employee updated:", res);
                navigate('/home');
            })
            .catch(err => console.error("Error updating employee data:", err));
    }

    return (
        <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
            <div className="w-50 bg-white rounded p-3">
                <form onSubmit={handleSubmit}>
                    <h2>Update Employee</h2>
                    <div className="mb-2">
                        <label htmlFor="name">Name</label>
                        <input 
                            type="text" 
                            id="name" 
                            placeholder="Enter Name" 
                            className="form-control"
                            value={Name}
                            onChange={e => setName(e.target.value)}
                        />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="age">Age</label>
                        <input 
                            type="number" 
                            id="age" 
                            placeholder="Enter Age" 
                            className="form-control"
                            value={Age}
                            onChange={e => setAge(e.target.value)}
                        />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="dept">Dept</label>
                        <input 
                            type="text" 
                            id="dept" 
                            placeholder="Enter Dept" 
                            className="form-control"
                            value={Dept}
                            onChange={e => setDept(e.target.value)}
                        />
                    </div>
                    <button className="btn btn-success" type="submit">Update</button>
                </form>
            </div>
        </div>
    );
}

export default UpdateEmployee;

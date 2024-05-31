import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function CreateStudent() {
    const [Name, setName] = useState('');
    const [Age, setAge] = useState('');
    const [Dept, setDept] = useState('');
    const navigate = useNavigate();

    function handleSubmit(event) {
        event.preventDefault();
        axios.post('http://localhost:3000/employee', { Name, Age, Dept })
            .then(res => {
                console.log(res);
                navigate('/home');
            })
            .catch(err => {
                if (err.response && err.response.status === 409) {
                    alert('Employee name already exists');
                } else {
                    console.error(err);
                }
            });
    }

    return (
        <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
            <div className="w-50 bg-white rounded p-3">
                <form onSubmit={handleSubmit}>
                    <h2>Add Employee</h2>
                    <div className="mb-2">
                        <label htmlFor="name">Name</label>
                        <input 
                            type="text" 
                            id="name" 
                            className="form-control"
                            value={Name}
                            onChange={e => setName(e.target.value)}
                        />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="age">Age</label>
                        <input 
                            type="text" 
                            id="age" 
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
                            className="form-control"
                            value={Dept}
                            onChange={e => setDept(e.target.value)}
                        />
                    </div>
                    <button className="btn btn-success">Submit</button>
                </form>
            </div>
        </div>
    );
}

export default CreateStudent;

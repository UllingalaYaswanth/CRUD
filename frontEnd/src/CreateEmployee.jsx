import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function CreateEmployee() {
    const [Name, setName] = useState('');
    const [Age, setAge] = useState('');
    const [Dept, setDept] = useState('');
    const [MobileNumber, setMobileNumber] = useState('');
    const [Role, setRole] =useState('');
    const [Photo, setPhoto] = useState(null);
    const navigate = useNavigate();

    function handleSubmit(event) {
        event.preventDefault();
        const formData = new FormData();
        formData.append('Name', Name);
        formData.append('Age', Age);
        formData.append('Dept', Dept);
        formData.append('MobileNumber', MobileNumber);
        formData.append('Role',Role);
        if (Photo) {
            formData.append('Photo', Photo);
        }

        axios.post('http://localhost:3000/employee', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
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
                    <div>
                        <label htmlFor="number">Mobile Number</label>
                        <input
                            className="form-control mb-3"
                            type="number"
                            value={MobileNumber}
                            onChange={e => setMobileNumber(e.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor="role">Role</label>
                        <select className="form-control mb-3" onChange={e => setRole(e.target.value)}>
                            <option value={''}>Select Role</option>
                            <option value={"employee"}>Employee</option>
                            <option value={"admin"}>Admin</option>
                        </select>
                    </div>
                    <div>
                        <label>Photo</label>
                        <input
                        className="form-control mb-3"
                            type="file"
                            name="image"
                            accept="image/*"
                            multiple={false}
                            onChange={e => setPhoto(e.target.files[0])}
                        />
                    </div>
                    <button className="btn btn-success">Submit</button>
                </form>
            </div>
        </div>
    );
}

export default CreateEmployee;

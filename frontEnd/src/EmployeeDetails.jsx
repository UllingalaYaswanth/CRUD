import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function EmployeeDetails() {
    const { ID } = useParams();
    const [employee, setEmployee] = useState(null);

    useEffect(() => {
        axios.get(`http://localhost:3000/employee/${ID}`)
            .then(res => {
                console.log('Employee data:', res.data);
                setEmployee(res.data);
            })
            .catch(err => console.log(err));
    }, [ID]);

    if (!employee) {
        return (
            <div className="d-flex vh-100 bg-primary align-items-center justify-content-center">
                <div className="bg-white rounded p-3">
                    <h2>Loading...</h2>
                </div>
            </div>
        );
    }

    return (
        <div className="d-flex vh-100 bg-primary align-items-center justify-content-center">
            <div className="bg-white rounded p-5 col-md-5">
                <div className="d-flex justify-content-end mb-3">
                    <Link to="/home" className="btn btn-secondary">Back</Link>
                </div>
                <table className="table">
                    <tbody>
                        <tr><td>ID</td><td>{employee.ID}</td></tr>
                        <tr><td>Name</td><td>{employee.Name}</td></tr>
                        <tr><td>Age</td><td>{employee.Age}</td></tr>
                        <tr><td>Number</td><td>{employee.MobileNumber}</td></tr>
                        <tr><td>Dept</td><td>{employee.Dept}</td></tr>
                        <tr>
                            <td>Photo</td>
                            <td className="rounded">
                                {employee.Photo && <img src={`http://localhost:3000/uploads/${employee.Photo}`} alt="employee" style={{ width: '100px', height: '100px' }} />}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default EmployeeDetails;

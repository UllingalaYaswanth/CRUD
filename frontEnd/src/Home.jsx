import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

function Home() {
  const [employees, setEmployees] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:3000/')
      .then(res => setEmployees(res.data))
      .catch(err => console.log(err));
  }, []);

  const handleDelete = async (EmpID) => {
    const confirmDelete = window.confirm("Are you sure that you want to delete this employee?");
    if (!confirmDelete) {
      return;
    }

    try {
      await axios.delete(`http://localhost:3000/employee/${EmpID}`);
      // Update state to remove the deleted employee
      setEmployees(employees.filter(employee => employee.EmpID !== EmpID));
    } catch (err) {
      console.log(err);
    }
  };

  const handleLogout = () => {
    // Perform any logout logic here if necessary (e.g., clearing tokens)
    navigate('/');
  };

  return (
    <div className='d-flex flex-column vh-100 bg-primary justify-content-center align-items-center position-relative'>
      <button
        onClick={handleLogout}
        className='btn btn-danger position-absolute'
        style={{ top: '10px', right: '10px' }}
      >
        Logout
      </button>
      <div className='w-50 bg-white rounded p-3'>
        <div className='d-flex justify-content-between align-items-center mb-3'>
          <h2 className='text-center'><strong>Employee Details</strong></h2>
        </div>
        <div className="d-flex justify-content-end mb-3">
          <Link to='/Create' className='btn btn-success'>Add+</Link>
        </div>
        <table className='table'>
          <thead>
            <tr>
              <th>EmpID</th>
              <th>EmpName</th>
              <th>EmpAge</th>
              <th>EmpDept</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((employee, i) => (
              <tr key={i}>
                <td>{employee.EmpID}</td>
                <td>{employee.EmpName}</td>
                <td>{employee.EmpAge}</td>
                <td>{employee.EmpDept}</td>
                <td>
                  {/* <Link to={`update/${employee.EmpID}`} className='btn btn-primary'>Update</Link> */}
                  <Link to={`/home/update/${employee.EmpID}`} className='btn btn-primary'>Update</Link>

                  <button onClick={() => handleDelete(employee.EmpID)} className='btn btn-danger ms-2'>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Home;

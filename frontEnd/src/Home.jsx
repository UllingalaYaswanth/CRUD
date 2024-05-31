import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

function Home({ onLogout }) {
  const [employees, setEmployees] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:3000/')
      .then(res => setEmployees(res.data))
      .catch(err => console.log(err));
  }, []);

  const handleDelete = async (ID) => {
    const confirmDelete = window.confirm("Are you sure that you want to delete this employee?");
    if (!confirmDelete) {
      return;
    }

    try {
      await axios.delete(`http://localhost:3000/employee/${ID}`);
      // Update state to remove the deleted employee
      setEmployees(employees.filter(employee => employee.ID !== ID));
    } catch (err) {
      console.log(err);
    }
  };


  return (
    <div className='d-flex flex-column vh-100 bg-primary justify-content-center align-items-center position-relative'>
      <div className='w-50 bg-white rounded p-3'>
        <div className='d-flex justify-content-between align-items-center justify-content-end mb-3'>
          <h2 className='text-center'><strong>Employee Details</strong></h2>
          <Link to='/Create' className='btn btn-success'>Add+</Link>
        </div>
        <div className="">
          
        </div>
        <table className='table'>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Age</th>
              <th>Dept</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody className='align-text-bottom'>
            {employees.map((employee, i) => (
              <tr key={i}>
                <td>{employee.ID}</td>
                <td><Link to={`/home/update/${employee.ID}`} className='d-flex text-dark text-decoration-none'>{employee.Name}</Link></td>
                <td>{employee.Age}</td>
                <td>{employee.Dept}</td>
                <td>
                  <button onClick={() => handleDelete(employee.ID)} className='btn btn-danger ms-1'><DeleteForeverIcon/></button>
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

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import Lottie from 'react-lottie';

function Home({ onLogout }) {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(false);
  const [animationData, setAnimationData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:3000/')
      .then(res => setEmployees(res.data))
      .catch(err => console.log(err));

    fetch('https://lottie.host/c3af2b9a-86e8-43a8-8ec0-cb9bb0db28cc/f9mdFcSb56.json')
      .then(response => response.json())
      .then(data => setAnimationData(data));
  }, []);

  const handleDelete = async (ID) => {
    const confirmDelete = window.confirm("Are you sure that you want to delete this employee?");
    if (!confirmDelete) {
      return;
    }

    try {
      await axios.delete(`http://localhost:3000/employee/${ID}`);
      setEmployees(employees.filter(employee => employee.ID !== ID));
    } catch (err) {
      console.log(err);
    }
  };

  const handleEmployeeClick = (ID) => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigate(`/employee/${ID}`);
    }, 2000);
  };

  const loadingOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  if (loading || !animationData) {
    return (
      <div className='d-flex vh-100 align-items-center justify-content-center bg-primary'>
        <Lottie options={loadingOptions} height={300} width={300} isClickToPauseDisabled={true} />
      </div>
    );
  }

  return (
    <div className='d-flex flex-column vh-100 bg-primary justify-content-center align-items-center position-relative'>
      <div className='w-50 bg-white rounded p-3'>
        <div className='d-flex justify-content-between align-items-center mb-3'>
          <h2 className='text-center'><strong>Employee Details</strong></h2>
          <Link to='/Create' className='btn btn-success'>Add+</Link>
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
          <tbody>
            {employees.map((employee, i) => (
              <tr key={i}>
                <td>{employee.ID}</td>
                <td>
                  <span onClick={() => handleEmployeeClick(employee.ID)} className='d-flex text-dark text-decoration-none' style={{ cursor: 'pointer' }}>
                    {employee.Name}
                  </span>
                </td>
                <td>{employee.Age}</td>
                <td>{employee.Dept}</td>
                <td>
                  <button onClick={() => handleDelete(employee.ID)} className='btn btn-danger ms-1'><DeleteForeverIcon /></button>
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

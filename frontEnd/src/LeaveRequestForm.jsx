import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link component from React Router

const LeaveRequestForm = () => {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [leaveType, setLeaveType] = useState('');
  const [reason, setReason] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    const response = await fetch('/api/task', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        startDate,
        endDate,
        leaveType,
        reason,
        status,
      }),
    });

    if (response.ok) {
      // Handle successful form submission
      console.log('Request sent successfully');
    } else {
      // Handle error
      console.error('Error sending Request');
    }
  };

  return (
    <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
      <div className="bg-white p-5 rounded">
        <div className="d-flex justify-content-between align-items-center gap-3">
          <h3 className="me-3">LEAVE REQUEST FORM</h3>
          <Link to="/otherpage" className="btn btn-primary">View Requests</Link>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="startDate" className="form-label"><h6>Start:</h6></label>
            <input
              type="date"
              className="form-control"
              id="startDate"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              placeholder="Start Date"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="endDate" className="form-label"><h6>End:</h6></label>
            <input
              type="date"
              className="form-control"
              id="endDate"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              placeholder="End Date"
            />
          </div>
          <div className="form-group mb-3">
            <label htmlFor="leaveType" className="form-label"><h6>Type of Leave:</h6></label>
            <select
              className="form-control"
              id="leaveType"
              value={leaveType}
              onChange={(e) => setLeaveType(e.target.value)}
            >
              <option value="">Select Leave Type</option>
              <option value="sick">Sick Leave</option>
              <option value="planned">Planned Leave</option>
              <option value="unplanned">Unplanned Leave</option>
            </select>
          </div>
          <div className="form-group mb-3">
            <label htmlFor="status" className="form-label"><h6>Status:</h6></label>
            <select
              className="form-control"
              id="status"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
            >
              <option value="">Approved By</option>
              <option value="jhansi">Jhansi</option>
              <option value="praveen">Praveen</option>
              <option value="uday">Uday Kiran</option>
            </select>
          </div>
          <div className="mt-3 d-flex justify-content-center align-items-center">
            <button type="submit" className="btn btn-primary">Submit</button>
          </div>
        </form>
      </div>
    </div>
  )
}  

export default LeaveRequestForm;
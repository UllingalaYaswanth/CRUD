import React, { useState } from 'react';

const TaskScreen = () => {
  const [taskName, setTaskName] = useState('');
  const [description, setDescription] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [status, setStatus] = useState('');
  const [assignedTo, setAssignedTo] = useState('user1');

  const handleSubmit = async (event) => {
    event.preventDefault();

    const response = await fetch('/api/task', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        taskName,
        description,
        startDate,
        endDate,
        status,
        assignedTo,
      }),
    });

    if (response.ok) {
      // Handle successful form submission
      console.log('Task created successfully');
    } else {
      // Handle error
      console.error('Error creating task');
    }
  };

  return (
    <div className="d-flex vh-100 align-items-center justify-content-center bg-primary">
      <div className="task-screen-container p-5 col-md-9 rounded bg-white">
        <h1>Task Screen</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="taskName" className="form-label">Task Name:</label>
            <input
              type="text"
              className="form-control"
              id="taskName"
              value={taskName}
              onChange={(e) => setTaskName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="description" className="form-label">Description:</label>
            <textarea
              className="form-control"
              id="description"
              rows="4"
              cols="50"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div className="form-row d-flex gap-3">
            <div className="form-group col-md-6 mb-6">
              <label htmlFor="startDate" className="form-label">Start Date:</label>
              <input
                type="date"
                className="form-control"
                id="startDate"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
              />
            </div>
            <div className="form-group col-md-6 mb-6">
              <label htmlFor="endDate" className="form-label">End Date:</label>
              <input
                type="date"
                className="form-control"
              id="endDate"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
              />
            </div>
          </div>
          <div className="form-row d-flex mr-2 gap-3">
            <div className="form-group col-md-6 mb-3">
              <label htmlFor="status" className="form-label">Status:</label>
              <input
                type="text"
                className="form-control"
                id="status"
                value={status}
                onChange={(e) => setStatus(e.target.value)}
              />
            </div>
            <div className="form-group col-md-6 mb-3 ">
              <label htmlFor="assignedTo" className="form-label">Assigned To:</label>
              <select
                className="form-control"
                id="assignedTo"
                value={assignedTo}
                onChange={(e) => setAssignedTo(e.target.value)}
              >
                <option value="user1">Dinesh</option>
                <option value="user2">Yashwanth</option>
                <option value="user3">sai kumar</option>
                <option value="user4">bhargav</option>
                <option value="user5">Manohar</option>
                <option value="user6">Jaswitha</option>
                <option value="user7">Karthik</option>
                <option value="user8">Sruthi</option>
              </select>
            </div>
          </div>
          <div className='mt-3 d-flex justify-content-center align-items-center'>
            <button type="submit" className="btn" style={{ backgroundColor: '#28a745', color: '#ffffff' }}>Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TaskScreen;
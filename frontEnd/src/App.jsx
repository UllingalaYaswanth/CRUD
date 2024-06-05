import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from './Home';
import CreateEmployee from './CreateEmployee';
import UpdateEmployee from './UpdateEmployee';
import TaskScreen from './TaskScreen';
import LeaveRequestForm from './LeaveRequestForm';
import { Layout } from 'antd';
import MenuList from './MenuList';
import Login from './Login';
import EmployeeDetails from './EmployeeDetails';

const { Header, Sider, Content } = Layout;

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
 
  useEffect(() => {
    // Check if user is already authenticated in localStorage
    const storedAuth = localStorage.getItem('isAuthenticated');
    if (storedAuth) {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogin = () => {
    // Update authentication state and store in localStorage
    setIsAuthenticated(true);
    localStorage.setItem('isAuthenticated', 'true');
  };

  const handleLogout = () => {
    // Clear authentication state and localStorage
    setIsAuthenticated(false);
    localStorage.removeItem('isAuthenticated');
  };

  return (
    <BrowserRouter>
      {isAuthenticated ? (
        <Layout>
          <Sider>
            <MenuList onLogout={handleLogout} />
          </Sider>
          <Layout>
            <Header style={{ background: '#2f4050', padding: 0 }} />
            <Content style={{ margin: '0px', overflow: 'initial' }}>
              <Routes>
                <Route path="/home" element={<Home/>} />
                <Route path="/employee/:ID" element={<EmployeeDetails />} />
                <Route path="/taskscreen" element={<TaskScreen />} />
                <Route path="/create" element={<CreateEmployee />} />
                <Route path="/home/update/:id" element={<UpdateEmployee />} />
                <Route path="/leaverequestform" element={<LeaveRequestForm />} />
                <Route path="*" element={<Navigate to="/home" />} />
              </Routes>
            </Content>
          </Layout>
        </Layout>
      ) : (
        <Routes>
          <Route path="/" element={<Login onLogin={handleLogin} />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      )}
    </BrowserRouter>
  );
}

export default App;


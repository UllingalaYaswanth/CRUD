import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from './Home';
import CreateStudent from './CreateStudent';
import UpdateEmployee from './UpdateEmployee';
import TaskScreen from './TaskScreen';
import LeaveRequestForm from './LeaveRequestForm';
import { Layout } from 'antd';
import MenuList from './MenuList';
import Login from './Login';

const { Header, Sider, Content } = Layout;

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  return (
    <BrowserRouter>
      {isAuthenticated ? (
        <Layout>
          <Sider>
            <MenuList />
          </Sider>
          <Layout>
            <Header style={{ background: '#2f4050', padding: 0 }} />
            <Content style={{ margin: '0px', overflow: 'initial' }}>
              <Routes>
                <Route path="/home" element={<Home onLogout={handleLogout} />} />
                <Route path="/taskscreen" element={<TaskScreen />} />
                <Route path="/create" element={<CreateStudent />} />
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

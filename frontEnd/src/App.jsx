import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
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
  return (
    <BrowserRouter>
      <Layout>
        <Sider>
          <MenuList />
        </Sider>
        <Layout>
          <Header style={{ background: '#2f4050', padding: 0 }} />
          <Content style={{ margin: '0px', overflow: 'initial' }}>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/taskscreen' element={<TaskScreen />} />
              <Route path='/create' element={<CreateStudent />} />
              <Route path='/home/update/:id' element={<UpdateEmployee />} />
              <Route path='/leaverequestform' element={<LeaveRequestForm />} />
            </Routes>
          </Content>
        </Layout>
      </Layout>
    </BrowserRouter>
  );
}

export default App;

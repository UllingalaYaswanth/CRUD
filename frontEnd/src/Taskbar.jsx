import React ,{useState} from "react";
import {Layout} from 'antd'

const {Header , Sider} =Layout;

function Taskbar(){
return(
    <Layout>
    <Sider className="sidebar">
            <Logo/>
            <Menu/>
        </Sider>
    </Layout>
 
);
}

export default Taskbar
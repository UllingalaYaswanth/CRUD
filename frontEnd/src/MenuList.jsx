import React from 'react';
import './App.css';
import { Link, useLocation } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import ExitToApp from '@mui/icons-material/ExitToApp';

function MenuList(props) {
  const location = useLocation();

  return (
    <div className="Sidebar">
      <ul className="SidebarList">
        {SidebarData.map((val, key) => (
          <li key={key}>
            <Link
              to={val.link}
              className={`row ${location.pathname === val.link ? "active" : ""}`}
            >
              <div id="icon">{val.icon}</div>
              <div id="title">{val.title}</div>
            </Link>
          </li>
        ))}
        {/* Render logout button */}
        <li className='sidebar_logout'>
        <Link to="/" className="row" onClick={props.onLogout}>
            <div id="icon"><ExitToApp /></div>
            <div id="title">Logout</div>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default MenuList;

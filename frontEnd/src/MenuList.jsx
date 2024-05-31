import React from 'react';
import './App.css';
import { Link, useLocation } from 'react-router-dom';
import { SidebarData } from './SidebarData';

function MenuList() {
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
      </ul>
    </div>
  );
}

export default MenuList;

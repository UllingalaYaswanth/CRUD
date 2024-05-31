import React from 'react';
import HomeIcon from '@mui/icons-material/Home';
import ArticleOutlinedIcon from '@mui/icons-material/Article';
import AssignmentIndOutlinedIcon from '@mui/icons-material/AssignmentInd';
import SettingsOutlinedIcon from '@mui/icons-material/Settings';

export const SidebarData = [
  {
    title: 'Home',
    icon: <HomeIcon />,
    link: '/home'
  },
  {
    title: 'Task Screen',
    icon: <ArticleOutlinedIcon />,
    link: '/taskscreen'
  },
  {
    title: 'Create Student',
    icon: <AssignmentIndOutlinedIcon />,
    link: '/create'
  },
  {
    title: 'Update Employee',
    icon: <SettingsOutlinedIcon />,
    link: '/home/update/1'
  },
  {
    title: 'Leave Request Form',
    icon: <AssignmentIndOutlinedIcon />,
    link: '/leaverequestform'
  }
];

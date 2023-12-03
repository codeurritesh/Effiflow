// import React from 'react'
// import CIcon from '@coreui/icons-react'
// import {cilUserPlus,cilGroup,cilSpeedometer} from '@coreui/icons'
// import { CNavItem, CNavTitle } from '@coreui/react'

// const _nav = [
//   {
//     component: CNavItem,
//     name: 'Dashboard',
//     to: '/dashboard',
//     icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
//     badge: {
//       color: 'info',
//       text: 'NEW',
//     },
//   },
//   {
//     component: CNavTitle,
//     name: 'Employee Functionalities',
//   },
//   {
//     component: CNavItem,
//     name: 'Add new Employee',
//     to: '/theme/colors',
//     icon: <CIcon icon={cilUserPlus} customClassName="nav-icon" />,
//   },
//   {
//     component: CNavItem,
//     name: 'All Employees',
//     to: '/theme/typography',
//     icon: <CIcon icon={cilGroup} customClassName="nav-icon" />,
//   },
// ]

// export default _nav

import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cilBell,
  cilCalculator,
  cilChartPie,
  cilCursor,
  cilDescription,
  cilUserPlus,
  cilNotes,
  cilGroup,
  cilPuzzle,
  cilSpeedometer,
  cilPowerStandby,
  cilStar,
} from '@coreui/icons'
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react'

const _nav = [
  {
    component: CNavItem,
    name: 'Dashboard',
    to: '/dashboard',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
    badge: {
      color: 'info',
      text: 'NEW',
    },
  },
  {
    component: CNavTitle,
    name: 'Controls',
  },
  {
    component: CNavItem,
    name: 'Add new Employee',
    to: '/forms/input-group',
    icon: <CIcon icon={cilUserPlus} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'All Employees',
    to: '/theme/typography',
    icon: <CIcon icon={cilGroup} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Charts',
    to: '/charts',
    icon: <CIcon icon={cilChartPie} customClassName="nav-icon" />,
  },
  {
    component: CNavGroup,
    name: 'Notifications',
    icon: <CIcon icon={cilBell} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Alerts',
        to: '/notifications/alerts',
      },
     
    ],
  },
  {
    component: CNavTitle,
    name: 'Authentication',
  },
  {
    component: CNavGroup,
    name: 'Pages',
    icon: <CIcon icon={cilPowerStandby} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Login',
        to: '/login',
      },
      {
        component: CNavItem,
        name: 'Register',
        to: '/register',
      },
      {
        component: CNavItem,
        name: 'Error 404',
        to: '/404',
      },
      {
        component: CNavItem,
        name: 'Error 500',
        to: '/500',
      },
    ],
  },
]

export default _nav

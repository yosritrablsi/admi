import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cilBell,
  cilCalculator,
  cilChartPie,
  cilDescription,
  cilNotes,
  cilPuzzle,
  cilSpeedometer,
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
    name: 'tache',
  },
  {
    component: CNavGroup,
    name: 'gérer',
    icon: <CIcon icon={cilNotes} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'formation ',
        to: '/forms/formation',
      },
     
      {
        component: CNavItem,
        name: 'evenement',
        to: '/forms/event',
      },

      {
        component: CNavItem,
        name: 'reunion',
        to: '/forms/Reunion',
      },
      
    ],
  },

  {
    component: CNavItem,
    name: 'User',
    to: '/User',
    icon: <CIcon icon={cilChartPie} customClassName="nav-icon" />,
  },
  
  
  
  
]

export default _nav

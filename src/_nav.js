import React from 'react'
import CIcon from '@coreui/icons-react'
import {cilPuzzle, cilSpeedometer,} from '@coreui/icons'
import {CNavGroup, CNavItem} from '@coreui/react'

const _nav = [
    {
        component: CNavItem,
        name: 'ApiInfo',
        to: '/apiInfo',
        icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon"/>,
    },
    {
        component: CNavItem,
        name: 'EnvInfo',
        to: '/envInfo',
        icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon"/>,
    },
    {
        component: CNavGroup,
        name: 'Transfer',
        to: '/transfer',
        icon: <CIcon icon={cilPuzzle} customClassName="nav-icon"/>,
        items: [
            {
                component: CNavItem,
                name: 'DiffAndTransfer',
                to: '/transfer/diff',
            },
            {
                component: CNavItem,
                name: 'Rollback',
                to: '/transfer/rollback',
            }
        ],
    },

]

export default _nav

import React from 'react';
import {
    CBadge,
    CNavGroup,
    CNavItem,
    CNavTitle,
    CSidebar,
    CSidebarBrand,
    CSidebarNav,
    CSidebarToggler
} from "@coreui/react";
import CIcon from "@coreui/icons-react";
import {cilPuzzle, cilSpeedometer} from "@coreui/icons";

export const SideBar = () => {
    return (
        <div>
            <CSidebar>
                <CSidebarBrand>Sidebar Brand</CSidebarBrand>
                <CSidebarNav>
                    <CNavTitle>Nav Title</CNavTitle>
                    <CNavItem href="#">
                        <CIcon customClassName="nav-icon" icon={cilSpeedometer}/>
                        Nav item
                    </CNavItem>
                    <CNavItem href="#">
                        <CIcon customClassName="nav-icon" icon={cilSpeedometer}/>
                        With badge
                        <CBadge color="primary ms-auto">NEW</CBadge>
                    </CNavItem>
                    <CNavGroup toggler="Nav dropdown">
                        <CNavItem href="#">
                            <CIcon customClassName="nav-icon" icon={cilPuzzle}/> Nav dropdown item
                        </CNavItem>
                        <CNavItem href="#">
                            <CIcon customClassName="nav-icon" icon={cilPuzzle}/> Nav dropdown item
                        </CNavItem>
                    </CNavGroup>
                </CSidebarNav>
                <CSidebarToggler/>
            </CSidebar>
        </div>
    );
}
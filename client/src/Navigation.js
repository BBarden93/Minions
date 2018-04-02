import React from 'react'
import {Nav, NavItem, NavLink} from 'reactstrap'
import {NavLink as RouterNavLink} from 'react-router-dom'

const Navigation = (props) => {
    return (
        <Nav>
             <Nav>
                <NavLink tag={RouterNavLink} to="#">Link</NavLink> 
                <NavLink tag={RouterNavLink} to="#">Link</NavLink> 
                <NavLink tag={RouterNavLink} to="#">Link</NavLink> 
             </Nav>
        </Nav>
    )
}
export default Navigation
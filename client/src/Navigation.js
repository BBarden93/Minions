import React from 'react'
import {Nav, NavLink} from 'reactstrap'
import {NavLink as RouterNavLink} from 'react-router-dom'

const Navigation = (props) => {
    return (
        <Nav>
             <Nav>
                <NavLink tag={RouterNavLink} to="/">Home</NavLink> 
                <NavLink tag={RouterNavLink} to="/minions">Minions</NavLink> 
                <NavLink tag={RouterNavLink} to="/minions/new">Add a Minion</NavLink> 
             </Nav>
        </Nav>
    )
}
export default Navigation
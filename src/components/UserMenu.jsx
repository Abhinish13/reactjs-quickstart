import React,{Component} from 'react';
import {observer} from 'mobx-react';
import authservice from '../services/AuthService';
import {
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem } from 'reactstrap';

    const UserMenu = () => {
        if (!authservice.authInfo)
            return (
                <NavItem>
                    <NavLink onClick={authservice.login} className='clickable'>
                        Login
                    </NavLink>
                </NavItem>
            );

        return (<UncontrolledDropdown nav inNavbar>
            <DropdownToggle nav caret>
                {authservice.authInfo.givenName}
            </DropdownToggle>
            <DropdownMenu right>
                <DropdownItem onClick={authservice.logout} className='clickable'>
                    Logout
                </DropdownItem>
            </DropdownMenu>
        </UncontrolledDropdown>)
    };


    export default observer(UserMenu);



import React, { Component } from 'react';
import { NavItem, Nav, NavDropdown } from 'react-bootstrap';

class AdminNavbarLinks extends Component {
  render() {
    const notification = (
      <div>
        <i className='fa fa-globe' />
        <b className='caret' />
        <span className='notification'>5</span>
        <p className='hidden-lg hidden-md'>Notification</p>
      </div>
    );
    return (
      <div>
        <Nav>
          <Nav.Item >
            <Nav.Link href='/dashboard' >
              <i className='fa fa-dashboard' />
              <p className='hidden-lg hidden-md'>Dashboard</p>
            </Nav.Link>
          </Nav.Item>
          {/* <NavDropdown
            title={notification}
            id='basic-nav-dropdown'
          >
            <NavDropdown.Item>Notification 1</NavDropdown.Item>
            <NavDropdown.Item>Notification 2</NavDropdown.Item>
            <NavDropdown.Item>Notification 3</NavDropdown.Item>
            <NavDropdown.Item>Notification 4</NavDropdown.Item>
            <NavDropdown.Item>Another notifications</NavDropdown.Item>
          </NavDropdown> */}
          <Nav.Item>
            <Nav.Link href='#' >
              <i className='fa fa-search' />
              <p className='hidden-lg hidden-md'>Search</p>
            </Nav.Link>
          </Nav.Item>
        </Nav>
        {/* <Nav className={'justify-content-end'}>
          <Nav.Item >
            <Nav.Link href='/dashboard' >Account</Nav.Link>
          </Nav.Item>
          <NavDropdown
            title='Dropdown'
            id='basic-nav-dropdown-right'
          >
            <NavDropdown.Item>Action</NavDropdown.Item>
            <NavDropdown.Item>Another action</NavDropdown.Item>
            <NavDropdown.Item>Something</NavDropdown.Item>
            <NavDropdown.Item>Another action</NavDropdown.Item>
            <NavDropdown.Item>Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item>Separated link</NavDropdown.Item>
          </NavDropdown>
          <Nav.Item >
            <Nav.Link href='/dashboard' >Log out</Nav.Link>
          </Nav.Item>
        </Nav> */}
      </div>
    );
  }
}

export default AdminNavbarLinks;

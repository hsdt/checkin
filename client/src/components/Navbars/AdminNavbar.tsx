import React, { Component } from 'react';
import { Navbar } from 'react-bootstrap';

import AdminNavbarLinks from './AdminNavbarLinks';

class Header extends Component<any, any> {
  constructor(props) {
    super(props);
    this.mobileSidebarToggle = this.mobileSidebarToggle.bind(this);
    this.state = {
      sidebarExists: false,
    };
  }
  mobileSidebarToggle(e) {
    if (this.state.sidebarExists === false) {
      this.setState({
        sidebarExists: true,
      });
    }
    e.preventDefault();
    document.documentElement.classList.toggle('nav-open');
    const node = document.createElement('div');
    node.id = 'bodyClick';
    node.onclick = () => {
      document.body.removeChild(node);
      document.documentElement.classList.toggle('nav-open');
    };
    document.body.appendChild(node);
  }
  render() {
    return (
      <Navbar bg='light' expand='lg'>
        <Navbar.Brand>
          <a href='#pablo'>{this.props.brandText}</a>
        </Navbar.Brand>
        <Navbar.Toggle onClick={this.mobileSidebarToggle} />
        <Navbar.Collapse>
          <AdminNavbarLinks />
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Header;

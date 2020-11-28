import React, { Component } from 'react';
import { Navbar } from 'react-bootstrap';

export class Header extends Component {
  render() {
    return (
      <Navbar bg="primary" variant="dark">
        <Navbar.Brand href="/">Stopwatch </Navbar.Brand>
      </Navbar>
    );
  }
}

export default Header;

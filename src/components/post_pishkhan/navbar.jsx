import React, { Component } from 'react';
import { Navbar, Nav, Badge, Col } from 'react-bootstrap';

class NavBar extends Component {
    render() {
        return (
            <Navbar
                bg="dark"
                variant="dark"
                expand="md"
                className="flex-md-nowrap p-0  rtl shadow"
                fixed="top"
                style={{
                    zIndex: 99,
                    height: "40px",
                    marginRight: "240px"
                }}>
                <Col><h6 className="text-light">رتبه دفتر <Badge variant="success">10</Badge></h6></Col>
                <Col><h6 className="text-light">امتیاز منفی <Badge variant="danger">100</Badge></h6></Col>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav.Link className="ml-auto text-warning" href="/admin/logout">خروج</Nav.Link>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default NavBar;

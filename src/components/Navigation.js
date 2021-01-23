import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'
import "./Nav.css"

const Navigation = () => {
    return (
        <div>
            <Navbar className="nav-area">
                <Nav className="justify-content-center" activeKey="/home">
                        <Nav.Link href="/about">ABOUT</Nav.Link>
                    <Nav.Item className="location">
                        <Nav.Link href="/portfolioA">PORTFOLIO</Nav.Link>
                    </Nav.Item>
                    <Nav.Item className="location">
                        <Nav.Link href="/portfolioB">MORE</Nav.Link>
                    </Nav.Item>
                    <Nav.Item className="location">
                        <Nav.Link href="/contact">CONTACT</Nav.Link>
                    </Nav.Item>
                </Nav>
            </Navbar>
        </div>
    );
};

export default Navigation;
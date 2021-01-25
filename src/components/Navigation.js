import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'
import "./Nav.css"


const Navigation = () => {
    return (
        <div>
            <Navbar className="nav-area">
                <Nav className="justify-content-center" activeKey="/home">
                    <Nav.Link className="location" href="/about">ABOUT</Nav.Link>
                    <Nav.Link className="location" href="/portfolioA">PORTFOLIO</Nav.Link>
                    <Nav.Link className="location" href="/portfolioB">MORE</Nav.Link>
                    <Nav.Link className="location" href="/contact">CONTACT</Nav.Link>

                </Nav>
            </Navbar>
        </div>
    );
};

export default Navigation;
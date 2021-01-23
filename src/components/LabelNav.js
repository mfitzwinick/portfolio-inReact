import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import "./Nav.css"

const LabelNav = () => {
    return (
        <div>
            <Navbar className="nav-area" bg="light" id="label">
                <Navbar.Brand>FITZWINICK</Navbar.Brand>
            </Navbar>
        </div>
    );
};

export default LabelNav;
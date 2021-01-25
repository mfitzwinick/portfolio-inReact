import React from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import Talkbubble from "../images/Talkbubble.png"
import "../components/Contact.css"
import linkedin from "../images/linkedlogo.png"
import github from "../images/github.png"
import { Link } from "react-router-dom"

function ContactBox() {
    return (
        <div className="display">
            <Container fluid id="backdropContact">
                <Row>
                    <Col></Col>
                    <br />

                    <h1 id="fullname" style={{ fontFamily: "Montserrat, sans-serif;" }}>
                        Michele Fitzgerald-Winick
                                </h1>

                    <br />
                    <Card style={{ float: "right" }} id="narrative">
                        <Card.Body>
                            <div id="innernarrativetext">
                                <p>
                                    I love collaborating with creative and dynamic businesses, teams and individuals. </p>
                                <p>If you'd like to connect, <span style={{ fontWeight: "bold" }}>CONTACT </span>me via phone, text or email.
                            </p>
                                <p>phone: (310) 994-5619</p>
                                <p>email: mfitzwinick@gmail.com</p>
                            </div>
                        </Card.Body>
                    </Card>
                    <Col>

                        <Image id="talkbubble"
                            alt="Talk Bubbles"
                            width={120}
                            height={200}
                            src={Talkbubble}>
                        </Image>
                    </Col>
                    <Col></Col>
                    <Col>
                        <a href="https://www.linkedin.com/in/michele-fitzgerald-winick-1a2112b/">
                            <Image id="linkedin"
                                alt="linkedin"
                                width={120}
                                height={120}
                                src={linkedin}>
                            </Image>
                        </a>
                        <a href="https://github.com/mfitzwinick">
                            <Image id="github"
                                alt="github"
                                width={80}
                                height={80}
                                src={github}>
                            </Image>
                        </a>


                    </Col>


                </Row>
            </Container >

        </div >


    )
}

export default ContactBox;
import React from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import LandPadTemp from "../images/LandPadTemp.png";
import "../components/LandPad.css"

function LandPad() {
    return (

        <div className="display">
            <Row id="break">
                <h1 id="portfolioheading">PORTFOLIO</h1>
            </Row>
            <Container fluid id="backdropLandPad">
                <Row>
                    <Col></Col>
                    <br />
                    <h1 id="fullname" style={{ fontFamily: "Montserrat, sans-serif;", fontWeight: "2000" }}>
                        Land Pad
                                </h1>
                    <br />
                    <Card style={{ float: "right" }} id="narrative">
                        <Card.Body>
                            <div id="innernarrativetext">
                                <p>
                                    LAND PAD <span style={{ fontWeight: "bold" }}>MERN web application</span></p>
                                <p>Land Pad is a funcitonal social media web application for those interested in sharing real estate data and images.

                            </p>
                                <p>Michele worked within a four-person development team, focused primarily on back end functionality, but was also instrumental in it's concept and design.  The site uses Password Authentication, several Mongo db collections, and an interactive dashboard.
                            </p>
                                <br />
                                <h3>Link Here</h3>
                            </div>
                        </Card.Body>
                    </Card>
                    <Col>

                        <Image id="landpadimg"
                            alt="Land Pad"
                            width={120}
                            height={200}
                            src={LandPadTemp}>
                        </Image>
                    </Col>
                    <Col></Col>
                    <Col>


                    </Col>


                </Row>
            </Container>

        </div>


    )
}

export default LandPad;
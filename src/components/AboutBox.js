import React from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import Michele from "../images/Michele.jpeg";
import "../components/About.css"

function AboutMe() {
    return (
        <div className="display">
            <Container fluid id="backdropAbout">
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
                                    Michele is a graduate of the Full Stack Web Development program at the University of Califoria, Los Angeles.  </p>
                                <p>As a <span style={{ fontWeight: "bold" }}>MERN web developer</span>, she is experienced with MONGOdb, Express.js, React and Node.js.  Michele is well versed in HTML, CSS and Javascript, and has worked with the MySql database system.

                            </p>
                                <p>Michele has also obtained a Bachelor's degree from Syracuse University in Communications. She is a licensed real estate agent, and worked in the financial sector in various roles.
                            </p>
                            </div>
                        </Card.Body>
                    </Card>
                    <Col>

                        <Image id="michelepic"
                            alt="Michele Pic"
                            width={120}
                            height={200}
                            src={Michele}>
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

export default AboutMe;
import React from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import ItaliaMain from "../images/ItaliaMain.jpeg";
import "../components/ItaliaToday.css"

function ItaliaToday() {
    return (

        <div className="display">
            <Row id="break">

            </Row>
            <Container fluid id="backdropItaliaToday">
                <Row>
                    <Col></Col>
                    <br />
                    <h1 id="fullname" style={{ fontWeight: "bolder", color: "#5A0016", fontFamily: "Fredericka the Great, cursive" }}>
                        ITALIA TODAY
                                </h1>
                    <br />
                    <Card style={{ float: "right" }} id="narrative">
                        <Card.Body>
                            <div id="innernarrativetext">
                                <p>
                                    ITALIA TODAY <span style={{ fontWeight: "bold" }}>Web application using Node.js and MySql</span></p>
                                <p>Italia Today is a travel resource for those who love to travel.  The site offers relevant data through search APIs.  It contains travel, food and music information to those who have Italy on their travel list.

                            </p>
                                <p>Michele pitched this concept during the global pandemic for both future travelers (Travel Section) and non-travelers (Italy at Home Section) alike.  The site uses API calls to populate MySql databases. It features multiple search functions and a music player.  The development team consisted of four members who coordinated through github.
                            </p>
                                <br />
                                <h3>Link Pending</h3>
                            </div>
                        </Card.Body>
                    </Card>
                    <Col>

                        <Image id="italiamain"
                            alt="Italia Today"
                            width={500}
                            height={350}
                            src={ItaliaMain}>
                        </Image>
                    </Col>
                    <Col></Col>
                    <Col>


                    </Col>


                </Row>
            </Container>

        </div >


    )
}

export default ItaliaToday;
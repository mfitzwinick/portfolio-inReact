import React from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import MusicDrake from "../images/MusicDrake.png";
import "../components/Musicology.css"

function Musicology() {
    return (

        <div className="display">
            <Row id="break">

            </Row>
            <Container fluid id="backdropMusicology">
                <Row>
                    <Col></Col>
                    <br />
                    <h1 id="fullname" style={{ fontFamily: "Major Mono Display, monospace", color: "white" }}>
                        MUSICOLOGY
                                </h1>
                    <br />
                    <Card style={{ float: "right" }} id="narrative">
                        <Card.Body>
                            <div id="innernarrativetext">
                                <p>
                                    MUSICOLOGY <span style={{ fontWeight: "bold" }}>Search application utilizing AJAX calls</span></p>
                                <p>Musicology is a search engine which populates data from several sources.  A tab navigator provides the user with social media and event information.  A side bar populates with similar artist suggestions.

                            </p>
                                <p>Within the development team, Michele focused primarily on front end design.
                            </p>
                                <br />
                                <a href="https://mfitzwinick.github.io/binary-babes/">
                                    <h3>https://mfitzwinick.github.io/binary-babes/</h3>
                                </a>
                            </div>
                        </Card.Body>
                    </Card>
                    <Col>
                        <a href="https://mfitzwinick.github.io/binary-babes/">
                            <Image className="flash" id="musicdrake"
                                alt="Drake Music"
                                width={500}
                                height={350}
                                src={MusicDrake}>
                            </Image>
                        </a>
                    </Col>
                    <Col></Col>
                    <Col>


                    </Col>


                </Row>
            </Container>

        </div>


    )
}

export default Musicology;
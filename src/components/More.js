import React from 'react';
import Card from 'react-bootstrap/Card'
import "../components/More.css"
import Burgerstand from "../images/Burgerstand.png"
import weather from "../images/weather.png"
import PerfectDayPlanner from "../images/PerfectDayPlanner.png"
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import CardGroup from 'react-bootstrap/CardGroup'


function More() {
    return (
        <div>

            <Row>
                <Col>
                    <Card>
                        <Card.Img
                            variant="top"
                            src={Burgerstand}
                            alt="Burger Stand"
                            width={400}
                            height={300} />
                        <Card.Body>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk
                                of the card's content.
      </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Img
                            variant="top"
                            src={weather}
                            alt="weather"
                            width={400}
                            height={300} />
                        <Card.Body>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk
                                of the card's content.
      </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <br />
            <Row>
                <Card>
                    <Card.Img
                        variant="top"
                        src={PerfectDayPlanner}
                        alt="planner"
                        width={400}
                        height={300} />
                    <Card.Body>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk
                            of the card's content.
      </Card.Text>
                    </Card.Body>
                </Card>
            </Row>

        </div >


    )

};


export default More;
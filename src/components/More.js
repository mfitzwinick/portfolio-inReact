import React from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container'
import "../components/More.css"
import Burgerstand from "../images/Burgerstand.png"
import weather from "../images/weather.png"
import PerfectDayPlanner from "../images/PerfectDayPlanner.png"


function More() {
    return (

        <div>
            <Container fluid id="morecontainer">
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
                <br />
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
                <br />
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
            </Container>
        </div>


    )

};


export default More;
import React from 'react';
import Card from 'react-bootstrap/Card'
import "../components/More.css"
import Burgerstand from "../images/Burgerstand.png"
import weather from "../images/weather.png"
import PerfectDayPlanner from "../images/PerfectDayPlanner.png"
import Row from 'react-bootstrap/Row'
import employee from "../images/employee.png"


function More() {
    return (
        <div id="cardholder">

            <Row>

                <Card>
                    <Card.Img
                        variant="top"
                        src={Burgerstand}
                        alt="Burger Stand"
                        width={800}
                        height={600} />
                    <Card.Body>
                        <Card.Text>
                            <h3>Burger Stand is a whimsical application for those who love burgers!</h3>
                            <a href="https://mighty-falls-73586.herokuapp.com/">https://mighty-falls-73586.herokuapp.com/</a>
                        </Card.Text>
                    </Card.Body>
                </Card>

                <Card>
                    <Card.Img
                        variant="top"
                        src={weather}
                        alt="weather"
                        width={800}
                        height={600} />
                    <Card.Body>
                        <Card.Text>
                            <h3>Select your favorite city and ckeck out todays weather!</h3>
                            <a href="https://mfitzwinick.github.io/weather-dashboard/">https://mfitzwinick.github.io/weather-dashboard/</a>
                        </Card.Text>
                    </Card.Body>
                </Card>

            </Row>
            <br />
            <Row>
                <Card>
                    <Card.Img
                        variant="top"
                        src={PerfectDayPlanner}
                        alt="planner"
                        width={800}
                        height={600} />
                    <Card.Body>
                        <Card.Text>
                            <h3>Here's your chance to plan your perfect day.</h3>
                            <a href="https://mfitzwinick.github.io/perfect-day-planner/">https://mfitzwinick.github.io/perfect-day-planner/</a>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Row>
            <Card>
                <Card.Img
                    variant="inquirer"
                    src={employee}
                    alt="employee"
                    width={800}
                    height={600} />
                <Card.Body>
                    <Card.Text>
                        <h3>Inquirer Based Employee Management System</h3>
                        <a href="https://mfitzwinick.github.io/employee-mgmt-system/">https://mfitzwinick.github.io/employee-mgmt-system/</a>
                    </Card.Text>
                </Card.Body>
            </Card>
        </div >


    )

};


export default More;
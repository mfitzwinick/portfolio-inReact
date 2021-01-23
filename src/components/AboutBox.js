import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'
import "../components/About.css"
import "../images/me.jpeg"

function AboutMe() {
    return (
        <div className="display">
            <Jumbotron fluid>
                <Container>
                    <div>
                        <h1>Fluid jumbotron</h1>
                        <img src="../images/me.jpeg"></img>
                    </div>
                    <p>
                        This is a modified jumbotron that occupies the entire horizontal space of
                        its parent.
    </p>
                </Container>
            </Jumbotron>


        </div>





    )
}

export default AboutMe;
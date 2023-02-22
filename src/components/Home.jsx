import React, { Component } from 'react';
import Connection from './Connection';
import Teleoperation from './Teleoperation';
import {Row, Col, Container, Button} from "react-bootstrap";
import RobotState from './RobotState';
import Map from './Map';

class Home extends Component {
    state = {};

    render() { 
        return (
        <div>
            <Container>
                <h1 className='text-center mt-3'>Robot Control Page</h1>
                <Row>
                    <Col>
                        <Connection/>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Teleoperation/>
                    </Col>
                    <Col>
                        <h3>Map Viewer</h3>
                    </Col>
                   
                </Row>
                <Row>
                
                    <Col>
                        <RobotState/>
                    </Col>
                    <Col>
                       
                        <Map/>
                        
                    </Col>
                </Row>
        
            </Container>
        </div>
        );
    }
}
 
export default Home;